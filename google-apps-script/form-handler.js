/**
 * Google Apps Script for Insight Axis Form Handler
 * 
 * Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save and deploy as web app
 */

function doPost(e) {
  try {
    // Your Google Sheet ID (get this from the URL of your sheet)
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your actual sheet ID
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.industry || !data.challenge) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false, 
          error: 'Missing required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add data to the sheet
    sheet.appendRow([
      new Date().toISOString(), // Timestamp
      data.fullName,            // Full Name
      data.email,               // Email
      data.phone || '',         // Phone
      data.companySize || '',   // Company Size
      data.industry,            // Industry
      data.challenge,           // Challenge
      data.source || 'Website Contact Form' // Source
    ]);
    
    // Optional: Send email notification
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Internal server error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Send email notification when form is submitted
 */
function sendEmailNotification(data) {
  try {
    // Email settings
    const ADMIN_EMAIL = 'admin@insightaxisllp.com'; // Replace with your email
    const SUBJECT = `🚀 New Strategy Session Request from ${data.fullName}`;
    
    // Create email body
    const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #3B82F6, #10B981); padding: 20px; border-radius: 10px 10px 0 0;">
        <h2 style="color: white; margin: 0;">New Strategy Session Request</h2>
        <p style="color: white; margin: 5px 0 0 0;">Insight Axis LLP</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #ddd;">👤 Full Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #ddd;">📧 Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #ddd;">📱 Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #ddd;">🏢 Company Size:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.companySize || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #1E3A8A; border-bottom: 1px solid #ddd;">🏭 Industry:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.industry}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #1E3A8A; vertical-align: top;">💡 Challenge:</td>
            <td style="padding: 8px;">${data.challenge}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3B82F6;">
          <p style="margin: 0; color: #666;">
            📅 <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', {timeZone: 'Asia/Dubai'})} (Dubai Time)
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="mailto:${data.email}?subject=Re: Strategy Session Request" 
             style="background: #F97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            📧 Reply to Lead
          </a>
        </div>
      </div>
    </div>
    `;
    
    // Send the email
    GmailApp.sendEmail(
      ADMIN_EMAIL,
      SUBJECT,
      '', // Plain text version (empty since we're using HTML)
      {
        htmlBody: emailBody,
        name: 'Insight Axis Website'
      }
    );
    
    console.log('✅ Email notification sent successfully');
    
  } catch (error) {
    console.error('❌ Error sending email notification:', error);
  }
}

/**
 * Test function - you can run this to test the email functionality
 */
function testEmailNotification() {
  const testData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+971 50 123 4567',
    companySize: '11-50',
    industry: 'Real Estate',
    challenge: 'We spend too much time on manual follow-ups with clients'
  };
  
  sendEmailNotification(testData);
}
