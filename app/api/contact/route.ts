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
