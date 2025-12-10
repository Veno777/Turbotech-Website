import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    // Check if ZOHO_APP_PASSWORD is set
    if (!process.env.ZOHO_APP_PASSWORD) {
      console.error('ZOHO_APP_PASSWORD environment variable is not set')
      // For development, log the submission instead of failing
      console.log('=== Contact Form Submission (No Email Config) ===')
      console.log('Name:', name)
      console.log('Email:', email)
      console.log('Phone:', phone)
      console.log('Address:', address)
      console.log('Message:', message)
      console.log('================================')
      
      // Return success even without email for development
      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully (logged to console - email not configured)'
      })
    }

    // Zoho Mail SMTP Setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@turbotechcleaners.com',
        pass: process.env.ZOHO_APP_PASSWORD,
      },
      // Add connection timeout
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    })

    // Verify connection before sending
    try {
      await transporter.verify()
      console.log('SMTP server is ready to send emails')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      throw new Error('Email server connection failed. Please check your email configuration.')
    }

    // Email content
    const mailOptions = {
      from: 'TurboTech Cleaners <info@turbotechcleaners.com>',
      to: 'info@turbotechcleaners.com',
      replyTo: email, // Allow replying directly to the customer
      subject: 'New Cleaning Service Request',
      html: `
        <h2>New Cleaning Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
      `,
      text: `
New Cleaning Service Request

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Address: ${address || 'Not provided'}

Message:
${message}
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    console.log('Email sent to:', mailOptions.to)
    console.log('Email sent from:', mailOptions.from)

    return NextResponse.json({ 
      success: true,
      messageId: info.messageId 
    })
  } catch (error: any) {
    console.error('Contact Form Error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Error processing form submission',
        message: 'Error processing form submission'
      },
      { status: 500 }
    )
  }
}
