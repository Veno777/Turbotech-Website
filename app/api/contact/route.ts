import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Zoho Mail SMTP Setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@turbotechcleaners.com',
        pass: process.env.ZOHO_APP_PASSWORD, // important
      },
    })

    // Email content
    const mailOptions = {
      from: 'TurboTech Cleaners <info@turbotechcleaners.com>',
      to: 'info@turbotechcleaners.com',
      subject: 'New Cleaning Service Request',
      html: `
        <h2>New Cleaning Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact Form Error:', error)
    return NextResponse.json(
      { message: 'Error processing form submission' },
      { status: 500 }
    )
  }
}
