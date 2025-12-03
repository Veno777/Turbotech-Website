import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the submission to console (as requested)
    console.log('=== Contact Form Submission ===')
    console.log('Name:', body.name)
    console.log('Email:', body.email)
    console.log('Phone:', body.phone)
    console.log('Address:', body.address)
    console.log('Service:', body.service)
    console.log('Message:', body.message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('================================')
    
    // In production, you would:
    // - Send an email notification
    // - Save to a database
    // - Integrate with a CRM system
    // - Send confirmation email to the user
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { message: 'Error processing form submission' },
      { status: 500 }
    )
  }
}

