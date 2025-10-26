import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendOtpMail = async (to, otp) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 16px; color: #333;">
      <h2 style="color: #ff6b00;">BiteSync Password Reset</h2>
      <p>Hello,</p>
      <p>We received a request to reset your password for your BiteSync account.</p>
      <p>Your One-Time Password (OTP) is:</p>
      <h3 style="background: #f3f3f3; display: inline-block; padding: 8px 16px; border-radius: 6px; letter-spacing: 2px; color: #000;">
        ${otp}
      </h3>
      <p>This OTP will expire in <b>5 minutes</b>.</p>
      <p>If you didn’t request a password reset, you can safely ignore this email.</p>
      <br />
      <p>Best regards,</p>
      <p><b>The BiteSync Team</b><br/>
      <a href="mailto:bitesyncapp@gmail.com" style="color:#ff6b00; text-decoration:none;">bitesyncapp@gmail.com</a></p>
    </div>
  `;

  await transporter.sendMail({
    from: `"BiteSync" <${process.env.EMAIL}>`,
    to,
    subject: "BiteSync Password Reset OTP",
    html: htmlContent,
  });
};
