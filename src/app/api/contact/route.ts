import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Using EmailJS or a simple fetch to an email service
    // For now, we'll use a simple approach with fetch to a service like Formspree
    const emailData = {
      name,
      email,
      subject,
      message,
      to: 'rishavkamboj75@gmail.com'
    };

    // You can replace this with your preferred email service
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', emailData);
    
    // In a real implementation, you would send this to an email service
    // For example, using Formspree, EmailJS, or a custom email service
    
    return NextResponse.json({ message: 'Message received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Failed to process message' }, { status: 500 });
  }
}
