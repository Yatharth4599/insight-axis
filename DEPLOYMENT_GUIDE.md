# 🚀 Deployment Guide for Insight Axis LLP Website

## 📋 Prerequisites
✅ **Your website is working locally**
✅ **Google Sheets integration is functional**  
✅ **Email notifications are working**
✅ **All code is committed to Git**

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended) - FREE**

**Why Vercel?**
- ✅ **FREE for personal/commercial use**
- ✅ **Perfect for Next.js** (made by the same team)
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** for fast loading
- ✅ **Custom domain support**
- ✅ **SSL certificates** included

**Steps:**
1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up with GitHub** account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure environment variables:**
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ADMIN_EMAIL=yatharthkherwork@gmail.com
   ```
6. **Click "Deploy"**
7. **Your site will be live** at `https://your-project.vercel.app`

### **Option 2: Netlify - FREE**

**Steps:**
1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up with GitHub**
3. **Click "New site from Git"**
4. **Choose your repository**
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Add environment variables** in Site Settings
7. **Deploy**

### **Option 3: GitHub Pages - FREE**

**Steps:**
1. **Add to `next.config.ts`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   ```
2. **Build for static export:**
   ```bash
   npm run build
   ```
3. **Deploy to GitHub Pages**

## 🔧 Environment Variables Setup

**For Production, you'll need to set:**

```bash
# Your Google Apps Script URL
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwsq8-n4aMBqlRrhhQRxL2OZc-fuPnwjpvEqx_6bqcnSg-TbSocPPJI_a17M-PC_qacYg/exec

# Admin email
ADMIN_EMAIL=yatharthkherwork@gmail.com

# Optional: Custom domain
FROM_EMAIL=website@insightaxisllp.com
```

## 🌍 Custom Domain Setup (insightaxisllp.com)

### **After deploying to Vercel/Netlify:**

1. **Go to your hosting provider's dashboard**
2. **Navigate to "Domains" or "Domain Management"**
3. **Add custom domain:** `insightaxisllp.com`
4. **Configure DNS records** with your domain registrar:

   **For Vercel:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **For Netlify:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

5. **Wait for DNS propagation** (up to 48 hours)
6. **SSL certificate** will be automatically provisioned

## 📱 Mobile Optimization

Your website is already mobile-optimized with:
- ✅ **Responsive design**
- ✅ **Touch-friendly buttons**
- ✅ **Mobile WhatsApp integration**
- ✅ **Fast loading times**

## 🔍 SEO Optimization

Your website includes:
- ✅ **Proper meta tags**
- ✅ **Structured markup**
- ✅ **Fast loading speeds**
- ✅ **Mobile responsiveness**

**To improve SEO further:**
1. **Add Google Analytics**
2. **Submit to Google Search Console**
3. **Create sitemap.xml**
4. **Add more content pages**

## 🧪 Testing Your Live Website

**After deployment, test:**
1. **Form submissions** → Check Google Sheets
2. **Email notifications** → Verify emails arrive
3. **WhatsApp integration** → Test chat buttons
4. **Mobile responsiveness** → Test on phones/tablets
5. **Load speed** → Use Google PageSpeed Insights

## 🚨 Troubleshooting

**Common Issues:**

1. **Forms not working:**
   - Check environment variables are set
   - Verify Google Apps Script URL is correct
   - Test Google Apps Script permissions

2. **Images not loading:**
   - Ensure all images are in `/public` folder
   - Check file paths in code

3. **Styling issues:**
   - Verify Tailwind CSS is building correctly
   - Check for any CSS conflicts

## 📈 Post-Deployment

**After going live:**
1. **Update Google Apps Script email** to use your custom domain
2. **Set up Google Analytics** for traffic tracking
3. **Monitor form submissions** daily
4. **Test website speed** regularly
5. **Backup your code** regularly

## 🎯 Your Website Will Be Live At:

- **Temporary URL:** `https://your-project.vercel.app`
- **Custom Domain:** `https://insightaxisllp.com`
- **Mobile-friendly:** Works perfectly on all devices
- **Professional:** Ready to receive leads immediately

## 📞 Support

Your website is production-ready with:
- ✅ **Professional design**
- ✅ **Working contact forms**
- ✅ **Email notifications**
- ✅ **WhatsApp integration**
- ✅ **Mobile optimization**
- ✅ **SSL security**

Congratulations! 🎉 Your AI & automation agency website is ready to go live!
