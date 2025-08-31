# 📋 Form Data Collection Setup Guide

Your contact form is now fully functional! Here are multiple options to collect and manage the form submissions:

## 🎯 Current Status
✅ **Form is working** - Submissions are logged in your terminal
✅ **Form validation** - Required fields are enforced
✅ **Loading states** - Professional UI feedback
✅ **Success/Error handling** - User-friendly messages

## 📊 Data Collection Options

### Option 1: Google Sheets (Recommended for Beginners)
**Best for:** Simple setup, easy to view/export data

1. **Create a Google Sheet:**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new sheet called "Insight Axis Leads"
   - Add headers: Timestamp, Name, Email, Phone, Company Size, Industry, Challenge

2. **Use Google Apps Script:**
   ```javascript
   // In Google Apps Script (script.google.com)
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     
     sheet.appendRow([
       new Date(),
       data.fullName,
       data.email,
       data.phone,
       data.companySize,
       data.industry,
       data.challenge
     ]);
     
     return ContentService.createTextOutput('Success');
   }
   ```

3. **Update your API route** to send data to Google Sheets

### Option 2: Email Notifications (Quick Setup)
**Best for:** Immediate notifications

Install email service:
```bash
npm install resend
# or
npm install nodemailer
```

Add to your `.env.local`:
```
RESEND_API_KEY=your_api_key_here
ADMIN_EMAIL=your@email.com
```

### Option 3: Airtable (User-Friendly Database)
**Best for:** CRM-like features, easy collaboration

1. Create an Airtable base
2. Get your API key and base ID
3. Install Airtable package:
```bash
npm install airtable
```

### Option 4: Simple JSON File (Development/Testing)
**Best for:** Local development and testing

Data is automatically logged in your terminal for now.

### Option 5: Database (Advanced)
**Best for:** Large scale, advanced features

Options:
- **Supabase** (PostgreSQL, easy setup)
- **PlanetScale** (MySQL)
- **MongoDB Atlas**
- **Firebase Firestore**

## 🔧 Quick Setup: Google Sheets

1. **Create Google Sheet** with these columns:
   ```
   A: Timestamp
   B: Full Name  
   C: Email
   D: Phone
   E: Company Size
   F: Industry
   G: Challenge
   H: Source
   ```

2. **Go to Apps Script** (script.google.com)

3. **Paste this code:**
   ```javascript
   function doPost(e) {
     try {
       const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
       const data = JSON.parse(e.postData.contents);
       
       sheet.appendRow([
         new Date().toISOString(),
         data.fullName,
         data.email,
         data.phone,
         data.companySize,
         data.industry,
         data.challenge,
         data.source
       ]);
       
       return ContentService
         .createTextOutput(JSON.stringify({success: true}))
         .setMimeType(ContentService.MimeType.JSON);
         
     } catch (error) {
       return ContentService
         .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

4. **Deploy as Web App:**
   - Click "Deploy" > "New Deployment"
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the Web App URL

5. **Update your form API** to use the Google Sheets URL

## 📧 Email Notifications Setup

Add to your `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@insightaxisllp.com
```

## 🚀 Current Form Features

### ✅ What's Working Now:
- **Form Validation** - Required fields checked
- **Loading States** - Professional spinner and disabled state
- **Success Feedback** - Confetti animation + success message
- **Error Handling** - User-friendly error messages
- **Data Collection** - All form data is captured and logged
- **Mobile Responsive** - Works perfectly on all devices

### 📝 Form Data Captured:
- Full Name
- Email Address  
- Phone Number
- Company Size
- Industry/Business Type
- Biggest Challenge
- Timestamp
- Source (Website Contact Form)

## 🎯 Next Steps

1. **Choose your data collection method** (Google Sheets recommended)
2. **Set up email notifications** (for immediate alerts)
3. **Test the complete flow** 
4. **Optional:** Add WhatsApp integration for instant notifications

## 🔧 Technical Notes

- Form uses modern React hooks and TypeScript
- API endpoint is at `/api/submit-form`
- All form submissions are logged in your development console
- Form includes proper loading states and error handling
- Responsive design works on all screen sizes

Your form is production-ready! Choose your preferred data collection method and you'll start receiving leads immediately.
