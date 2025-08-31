# 📊 Google Sheets + Email Setup Guide

## 🎯 What You'll Get
- ✅ **Automatic Google Sheets** data collection
- ✅ **Instant email notifications** with beautiful formatting
- ✅ **Real-time lead tracking** 
- ✅ **Professional email alerts** with all form data

## 📋 Step-by-Step Setup

### **Step 1: Create Your Google Sheet**

1. **Go to [Google Sheets](https://sheets.google.com)**
2. **Create a new sheet** and name it: **"Insight Axis - Lead Collection"**
3. **Add these exact column headers** in Row 1:

   | A | B | C | D | E | F | G | H |
   |---|---|---|---|---|---|---|---|
   | **Timestamp** | **Full Name** | **Email** | **Phone** | **Company Size** | **Industry** | **Challenge** | **Source** |

4. **Copy your Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
   ```
   Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### **Step 2: Set Up Google Apps Script**

1. **Go to [script.google.com](https://script.google.com)**
2. **Click "New Project"**
3. **Replace the default code** with the code from `google-apps-script/form-handler.js`
4. **Update the configuration:**
   ```javascript
   // Line 11: Replace with your actual Sheet ID
   const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
   
   // Line 37: Replace with your email
   const ADMIN_EMAIL = 'admin@insightaxisllp.com';
   ```

5. **Save the project** (Ctrl/Cmd + S) and name it: **"Insight Axis Form Handler"**

### **Step 3: Deploy as Web App**

1. **Click "Deploy" → "New Deployment"**
2. **Choose settings:**
   - **Type:** Web app
   - **Execute as:** Me
   - **Who has access:** Anyone
3. **Click "Deploy"**
4. **Authorize the script** (you'll see permission prompts)
5. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```

### **Step 4: Configure Your Website**

1. **Create a `.env.local` file** in your project root:
   ```bash
   # Copy this to .env.local
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ADMIN_EMAIL=your-email@insightaxisllp.com
   ```

2. **Replace `YOUR_SCRIPT_ID`** with your actual script URL from Step 3

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

### **Step 5: Test Your Setup**

1. **Fill out the form** on your website
2. **Check your Google Sheet** - new row should appear
3. **Check your email** - you should receive a formatted notification
4. **Check your terminal** - you should see success logs

## 📧 Email Notification Features

Your email notifications include:

### **Professional Design:**
- ✅ **Branded header** with gradient colors
- ✅ **Organized data table** with all form fields
- ✅ **Click-to-reply button** for instant follow-up
- ✅ **Dubai timezone** timestamps
- ✅ **Mobile-friendly** HTML formatting

### **Email Content:**
- 👤 **Full Name**
- 📧 **Email Address** (clickable)
- 📱 **Phone Number**
- 🏢 **Company Size**
- 🏭 **Industry**
- 💡 **Business Challenge**
- 📅 **Submission Time** (Dubai timezone)

## 🔧 Troubleshooting

### **Common Issues:**

1. **"Google Sheets not configured" error:**
   - Check your `.env.local` file exists
   - Verify the `GOOGLE_SCRIPT_URL` is correct
   - Restart your dev server

2. **No data in Google Sheets:**
   - Verify Sheet ID in Apps Script
   - Check Apps Script permissions
   - Look for errors in Apps Script execution log

3. **No email notifications:**
   - Check your Gmail spam folder
   - Verify email address in Apps Script
   - Test with the `testEmailNotification()` function

### **Testing in Apps Script:**

1. **Go to your Apps Script project**
2. **Select `testEmailNotification` function**
3. **Click "Run"** to test email sending
4. **Check execution log** for any errors

## 🎯 What Happens When Someone Submits?

1. **User fills form** → Website validates data
2. **Data sent to your API** → Server processes information
3. **Data saved to Google Sheets** → Automatic row added
4. **Email sent to you** → Instant notification with all details
5. **User sees success message** → Confetti animation plays

## 📈 Benefits

### **Google Sheets Integration:**
- ✅ **Automatic data collection** - no manual entry
- ✅ **Easy to analyze** - sort, filter, create charts
- ✅ **Exportable** - download as Excel, CSV, etc.
- ✅ **Shareable** - collaborate with team members
- ✅ **Backup** - Google automatically saves

### **Email Notifications:**
- ✅ **Instant alerts** - know immediately about new leads
- ✅ **Complete information** - all form data in one email
- ✅ **Professional appearance** - branded formatting
- ✅ **Easy follow-up** - click to reply directly
- ✅ **Mobile-friendly** - looks great on all devices

## 🚀 You're All Set!

Once configured, your form will:
- ✅ **Automatically save** all submissions to Google Sheets
- ✅ **Send instant emails** with professional formatting
- ✅ **Provide real-time feedback** to website visitors
- ✅ **Track all leads** in an organized spreadsheet

Your lead generation system is now fully automated! 🎉

## 📞 Next Steps

1. **Test the complete flow** with a dummy submission
2. **Bookmark your Google Sheet** for easy access
3. **Set up email filters** if needed (mark as important)
4. **Share the sheet** with team members if required
5. **Monitor your leads** and respond quickly for best results

## 🎁 Bonus Features

Your setup includes:
- **Timestamp tracking** for lead timing analysis
- **Source tracking** to measure marketing effectiveness  
- **Professional email templates** for credibility
- **Mobile-responsive** forms and emails
- **Error handling** and fallback systems

Congratulations! Your professional lead collection system is ready! 🚀
