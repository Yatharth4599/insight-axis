import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.industry || !data.challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add timestamp and format data
    const formData = {
      timestamp: new Date().toISOString(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || '',
      companySize: data.companySize || '',
      industry: data.industry,
      challenge: data.challenge,
      source: data.source || 'Website Contact Form'
    };

    console.log('Form submission received:', formData);

    // Send to Google Sheets
    const googleSheetsResponse = await sendToGoogleSheets(formData);
    
    if (!googleSheetsResponse.success) {
      console.error('Google Sheets error:', googleSheetsResponse.error);
      // Continue anyway - don't fail the entire request
    }

    // Send email notification
    await sendEmailNotification(formData);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Send data to Google Sheets
async function sendToGoogleSheets(data: Record<string, string>) {
  try {
    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';
    
    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
      console.log('⚠️ Google Sheets not configured. Set GOOGLE_SCRIPT_URL in environment variables.');
      return { success: false, error: 'Google Sheets not configured' };
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Data saved to Google Sheets successfully');
      return { success: true };
    } else {
      console.error('❌ Google Sheets error:', result.error);
      return { success: false, error: result.error };
    }
    
  } catch (error) {
    console.error('❌ Error sending to Google Sheets:', error);
    return { success: false, error: String(error) };
  }
}

// Email notification function
async function sendEmailNotification(data: Record<string, string>) {
  console.log('📧 New form submission:');
  console.log('='.repeat(60));
  console.log(`👤 Name: ${data.fullName}`);
  console.log(`📧 Email: ${data.email}`);
  console.log(`📱 Phone: ${data.phone || 'Not provided'}`);
  console.log(`🏢 Company Size: ${data.companySize || 'Not specified'}`);
  console.log(`🏭 Industry: ${data.industry}`);
  console.log(`💡 Challenge: ${data.challenge}`);
  console.log(`📅 Timestamp: ${data.timestamp}`);
  console.log('='.repeat(60));

  // Email will be sent by Google Apps Script
  // This ensures delivery and uses Gmail's infrastructure
  console.log('📬 Email notification will be sent by Google Apps Script');
}
