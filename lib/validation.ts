import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (e.g. +234 800 000 0000)")
    .max(20, "Phone number too long"),
  role: z.enum(["customer", "driver", "corporate"], {
    required_error: "Please select a role",
  }),
  referred_by: z.string().optional().nullable(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
