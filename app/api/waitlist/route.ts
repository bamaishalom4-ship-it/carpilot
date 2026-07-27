import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation";
import { supabaseAdmin } from "@/lib/supabase";
import { sendMailerLiteAutomation } from "@/lib/mailerlite";

// Helper to generate a short unique 6-character referral code (e.g., CP-8X9Y2Z)
function generateReferralCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `CP-${code}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Client and Server-side validation with Zod
    const validationResult = waitlistSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
          message: "Validation failed. Please check your form inputs.",
        },
        { status: 400 }
      );
    }

    const { name, email, phone, role, referred_by } = validationResult.data;
    const cleanEmail = email.toLowerCase().trim();

    // 2. Check if email is already registered in Supabase
    let referralCode = generateReferralCode();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carpilotng.online";

    const { data: existingUser, error: queryError } = await supabaseAdmin
      .from("waitlist")
      .select("referral_code, email")
      .eq("email", cleanEmail)
      .single();

    if (existingUser) {
      const existingRefCode = existingUser.referral_code;
      const existingRefLink = `${siteUrl}?ref=${existingRefCode}`;
      return NextResponse.json({
        success: true,
        isExisting: true,
        referral_code: existingRefCode,
        referral_link: existingRefLink,
        message: "You are already on the Carpilot launch waitlist! Here is your personal referral link.",
      });
    }

    // 3. Insert new row into Supabase waitlist table
    const { data: insertedUser, error: insertError } = await supabaseAdmin
      .from("waitlist")
      .insert({
        name,
        email: cleanEmail,
        phone,
        role,
        referral_code: referralCode,
        referred_by: referred_by || null,
      })
      .select()
      .single();

    if (insertError) {
      // If table doesn't exist yet or Supabase credentials are mock, fallback gracefully
      console.warn("[Supabase Insert Warning/Fallback]:", insertError.message);
    } else if (insertedUser?.referral_code) {
      referralCode = insertedUser.referral_code;
    }

    const referralLink = `${siteUrl}?ref=${referralCode}`;

    // 4. Trigger MailerLite automation
    await sendMailerLiteAutomation({
      email: cleanEmail,
      name,
      phone,
      role,
      referralCode,
      referralLink,
    });

    return NextResponse.json({
      success: true,
      referral_code: referralCode,
      referral_link: referralLink,
      message: "Congratulations! You've joined the Carpilot launch community.",
    });
  } catch (error) {
    console.error("[Waitlist API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while saving your registration. Please try again.",
      },
      { status: 500 }
    );
  }
}
