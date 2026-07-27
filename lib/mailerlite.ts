/**
 * MailerLite integration helper for Carpilot waitlist.
 * Adds new subscriber, assigns role tag, and attaches referral link custom fields.
 */
export async function sendMailerLiteAutomation({
  email,
  name,
  phone,
  role,
  referralCode,
  referralLink,
}: {
  email: string;
  name: string;
  phone: string;
  role: "customer" | "driver" | "corporate";
  referralCode: string;
  referralLink: string;
}) {
  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey || apiKey.includes("placeholder")) {
    console.log(`[MailerLite Integration Mock] Subscriber registered: ${email} (${role}), Referral Link: ${referralLink}`);
    return { success: true, mocked: true };
  }

  // Determine group ID based on role
  let groupId = process.env.MAILERLITE_GROUP_ID_CUSTOMERS;
  if (role === "driver") groupId = process.env.MAILERLITE_GROUP_ID_DRIVERS;
  if (role === "corporate") groupId = process.env.MAILERLITE_GROUP_ID_CORPORATE;

  try {
    const payload: Record<string, unknown> = {
      email,
      fields: {
        name,
        phone,
        role,
        referral_code: referralCode,
        referral_link: referralLink,
      },
      status: "active",
    };

    if (groupId) {
      payload.groups = [groupId];
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[MailerLite Error]:", response.status, errorText);
      return { success: false, error: errorText };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("[MailerLite Exception]:", error);
    return { success: false, error: String(error) };
  }
}
