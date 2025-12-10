import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message } = body

    console.log('=== Contact Form Submission Received ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Address:', address)
    console.log('Message:', message)
    console.log('ZOHO_APP_PASSWORD set:', !!process.env.ZOHO_APP_PASSWORD)
    console.log('========================================')

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    // Check if ZOHO_APP_PASSWORD is set
    if (!process.env.ZOHO_APP_PASSWORD) {
      console.error('❌ ZOHO_APP_PASSWORD environment variable is not set')
      console.log('⚠️ Form submission logged but NOT sent via email')
      console.log('📧 To fix: Add ZOHO_APP_PASSWORD to your environment variables')
      
      // Return success even without email for development
      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully (logged to console - email not configured)',
        warning: 'Email not sent - ZOHO_APP_PASSWORD not configured'
      })
    }

    // Zoho Mail SMTP Setup
    console.log('🔧 Setting up Zoho SMTP connection...')
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
    console.log('🔍 Verifying SMTP connection...')
    try {
      await transporter.verify()
      console.log('✅ SMTP server is ready to send emails')
    } catch (verifyError: any) {
      console.error('❌ SMTP verification failed:', verifyError)
      console.error('Error details:', {
        code: verifyError.code,
        command: verifyError.command,
        response: verifyError.response,
      })
      throw new Error(`Email server connection failed: ${verifyError.message || 'Unknown error'}`)
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

    console.log('📧 Attempting to send email...')
    console.log('To:', mailOptions.to)
    console.log('From:', mailOptions.from)
    console.log('Subject:', mailOptions.subject)
    
    const info = await transporter.sendMail(mailOptions)
    
    console.log('✅ Email sent successfully!')
    console.log('Message ID:', info.messageId)
    console.log('Response:', info.response)
    console.log('Accepted recipients:', info.accepted)
    console.log('Rejected recipients:', info.rejected)

    return NextResponse.json({ 
      success: true,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected
    })
  } catch (error: any) {
    console.error('❌ Contact Form Error:', error)
    console.error('Error type:', error.constructor.name)
    console.error('Error code:', error.code)
    console.error('Error command:', error.command)
    console.error('Error response:', error.response)
    console.error('Full error:', JSON.stringify(error, null, 2))
    
    // More detailed error message
    let errorMessage = 'Error processing form submission'
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Zoho App Password.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please check your internet connection.'
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Email server connection timed out. Please try again later.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        message: errorMessage,
        errorCode: error.code,
        errorDetails: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}
