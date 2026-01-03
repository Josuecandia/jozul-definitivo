import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // <--- Vuelve a usar variable
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // <--- Vuelve a usar variable
        pass: process.env.SMTP_PASS, // <--- Vuelve a usar variable
      },
    });

    const mailOptions = {
      from: `"Web TechNova" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // <--- Se envía a ti mismo
      replyTo: email, 
      subject: `Nuevo contacto: ${subject}`,
      html: `
        <h3>Nuevo Mensaje</h3>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}