# 🔗 Clean URLs Setup Guide
## Remove .html Extensions from Prince Alex Airbnb URLs

This guide shows you how to remove `.html` extensions from your URLs so they look cleaner and more professional.

## 🎯 Goal
Transform URLs from:
- `http://yoursite.com/admin.html` → `http://yoursite.com/admin`
- `http://yoursite.com/login.html` → `http://yoursite.com/login`
- `http://yoursite.com/booking.html` → `http://yoursite.com/booking`

---

## 🌐 Option 1: Apache Server (.htaccess) - RECOMMENDED

**Best for:** Web hosting services (cPanel, shared hosting, etc.)

### ✅ What's Included:
- `.htaccess` file is already created in your project
- Automatically removes `.html` from all URLs
- Redirects old `.html` URLs to clean URLs
- Includes performance optimizations

### 🚀 How to Deploy:
1. **Upload all files** to your web hosting
2. **The `.htaccess` file** will automatically handle clean URLs
3. **Test URLs:**
   - `yoursite.com/admin` ✅
   - `yoursite.com/login` ✅
   - `yoursite.com/booking` ✅

### ⚠️ Requirements:
- Apache web server with mod_rewrite enabled
- Most web hosting services support this by default

---

## 💻 Option 2: Local Development Server (Node.js)

**Best for:** Local development and testing

### 📋 Setup Steps:

1. **Install Node.js** (if not installed):
   - Download from: https://nodejs.org/
   - Choose LTS version

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Server:**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

4. **Access Your Site:**
   - Open: `http://localhost:3000`
   - Clean URLs work automatically!

### ✅ Features:
- Clean URLs for all pages
- Custom 404 page
- Static file serving
- Easy to customize

---

## 🐍 Option 3: Local Development Server (Python)

**Best for:** Quick local testing without Node.js

### 📋 Setup Steps:

1. **Run Python Server:**
   ```bash
   python server.py
   ```
   or
   ```bash
   python3 server.py
   ```

2. **Access Your Site:**
   - Open: `http://localhost:3000`
   - Clean URLs work automatically!

### ✅ Features:
- No additional installations needed
- Clean URLs for all pages
- Lightweight and fast

---

## 🔧 Option 4: Nginx Server

**Best for:** VPS or dedicated servers

### 📝 Nginx Configuration:
Add this to your nginx site configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/website;
    index index.html;

    # Remove .html extension
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Redirect .html URLs to clean URLs
    if ($request_uri ~ ^/(.*)\.html(\?.*)?$) {
        return 301 /$1$2;
    }
}
```

---

## 🧪 Testing Your Clean URLs

### ✅ URLs That Should Work:
- `yoursite.com/` (Home page)
- `yoursite.com/admin` (Admin dashboard)
- `yoursite.com/login` (Login page)
- `yoursite.com/register` (Registration)
- `yoursite.com/listings` (Room listings)
- `yoursite.com/property` (Property details)
- `yoursite.com/booking` (Booking page)
- `yoursite.com/profile` (User profile)
- `yoursite.com/about` (About page)
- `yoursite.com/contact` (Contact page)

### 🔄 Redirects That Should Work:
- `yoursite.com/admin.html` → `yoursite.com/admin`
- `yoursite.com/login.html` → `yoursite.com/login`

---

## 🚨 Important Notes

### ✅ For Production (Web Hosting):
- **Use the `.htaccess` file** - it's already configured
- Upload all files including `.htaccess`
- Most hosting providers support this automatically

### ✅ For Local Development:
- **Use Node.js server** for full-featured development
- **Use Python server** for quick testing
- Both servers are pre-configured

### ⚠️ Firebase Hosting Note:
If using Firebase Hosting, you'll need a `firebase.json` file:
```json
{
  "hosting": {
    "public": ".",
    "rewrites": [
      {
        "source": "/admin",
        "destination": "/admin.html"
      },
      {
        "source": "/login",
        "destination": "/login.html"
      }
    ]
  }
}
```

---

## 🎉 Benefits of Clean URLs

### ✅ Professional Appearance:
- `yoursite.com/admin` looks better than `yoursite.com/admin.html`
- Easier to remember and share
- More professional for business

### ✅ SEO Benefits:
- Search engines prefer clean URLs
- Better user experience
- Easier to type and share

### ✅ User Experience:
- Shorter URLs are easier to type
- Look more professional
- Better for social media sharing

---

## 🆘 Troubleshooting

### ❌ Clean URLs Not Working?

**For Web Hosting:**
- Check if `.htaccess` file was uploaded
- Verify Apache mod_rewrite is enabled
- Contact hosting support if needed

**For Local Development:**
- Make sure Node.js or Python is installed
- Check if port 3000 is available
- Try a different port if needed

### ❌ 404 Errors?
- Verify all HTML files exist
- Check file permissions
- Ensure server configuration is correct

---

## 🎯 Recommendation

**For most users:** Upload the `.htaccess` file with your website - it will automatically handle clean URLs on most web hosting services!

**For developers:** Use the Node.js server for local development and testing.

Your Prince Alex Airbnb website will now have professional, clean URLs! 🚀
