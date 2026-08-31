import { Resend } from "resend";
import env from "../config/env.js";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendOTPEmail(
  email: string,
  otp: string,
  type:
  | "sign-in"
  | "email-verification"
  | "forget-password"
  | "change-email",
) {
  const subject =
    type === "sign-in"
      ? "Your Lucid login code"
      : type === "email-verification"
        ? "Verify your Lucid email"
        : "Your Lucid password reset code";

  const { error } = await resend.emails.send({
    from: env.EMAIL_FROM,
    to: email,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto;">
        <h2>Lucid</h2>
        <p>Your verification code is:</p>

        <div style="
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 8px;
          margin: 24px 0;
        ">
          ${otp}
        </div>

        <p>This code expires in 5 minutes.</p>
        <p>If you didn't request this code, you can safely ignore this email.</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(`Failed to send OTP email: ${error.message}`);
  }
}