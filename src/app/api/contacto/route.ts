import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, needs, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos obligatorios faltantes' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"DigitalMads Leads" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_RECEIVER_EMAIL,
      subject: `🔥 Nuevo Lead Calificado: ${company || 'N/A'} - ${needs || 'N/A'}`,
      html: `
        <div style="background-color: #030305; color: #ffffff; padding: 30px; font-family: sans-serif; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #1a1a24;">
          <div style="text-align: center; margin-bottom: 20px;">
            <span style="background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%); padding: 8px 16px; border-radius: 20px; font-weight: bold; font-size: 14px;">DigitalMads Leads</span>
          </div>
          <h2 style="color: #a855f7; margin-bottom: 20px; text-align: center;">Nuevo Lead de Consultoría IA</h2>
          <div style="background-color: #0c0c14; padding: 20px; border-radius: 8px; border: 1px solid #222230; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p style="margin: 8px 0;"><strong>Interés:</strong> ${needs || 'No especificado'}</p>
            <p style="margin: 8px 0;"><strong>Origen de Navegación:</strong> <span style="color: #06b6d4; font-weight: bold;">${source || 'General'}</span></p>
          </div>
          <hr style="border: 0; border-top: 1px solid #222230; margin-bottom: 20px;" />
          <p style="margin-bottom: 10px;"><strong>Mensaje/Proyecto:</strong></p>
          <div style="background-color: #0a0a0f; padding: 15px; border-radius: 8px; border: 1px solid #222230; line-height: 1.6; color: #d1d5db;">
            ${message.replace(/\n/g, '<br />')}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
