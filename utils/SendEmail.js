import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Fonction pour générer un code de vérification
export function generateVerificationCode() {
    const length = 4; 
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export const SendEmailResetPassword = async (email, verificationCode, firstName) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `Pointage <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Password Reset Request",
            text: `
                Hi ${firstName},

                You have requested to reset your password.

                Please use the following code to reset your password within 1 hour: ${verificationCode}

                If you did not request a password reset, please ignore this email.

                Best regards,
                The Team
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to", email);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Erreur lors de l'envoi de l'email.");
    }
};