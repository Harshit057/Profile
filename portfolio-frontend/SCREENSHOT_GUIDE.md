# Project Screenshots Guide 📸

This guide will help you capture real screenshots of your live websites to replace the placeholder images in your portfolio.

## Quick Manual Method (Recommended)

### 1. **Take Screenshots Manually**
For each of your live projects:

1. **Open your live website** in a browser (preferably Chrome/Edge in incognito mode for clean screenshots)
2. **Set browser window size** to ~1200x800 for consistency
3. **Take a full-page screenshot** or crop to show the main interface
4. **Save the image** as PNG format with these exact names:
   - `mocca-screenshot.png` - for Mocca app
   - `citypulse-screenshot.png` - for CityPulse
   - `sellhole-screenshot.png` - for SellHole
   - `ai-tutor-screenshot.png` - for AI Tutor  
   - `dabba-screenshot.png` - for DABBA

### 2. **Save Screenshots**
Put all screenshots in: `portfolio-frontend/public/images/projects/`

### 3. **Image Requirements**
- **Format**: PNG (preferred) or JPG
- **Size**: 1200x800px (or similar 3:2 ratio)
- **Quality**: High resolution, clear interface visible
- **Content**: Show the main landing page or key features

## Your Current Live URLs:
- ✅ **Mocca**: https://mocca-kappa.vercel.app/
- ⏳ **CityPulse**: Update when live
- ⏳ **SellHole**: Update when live  
- ⏳ **AI Tutor**: Update when live
- ⏳ **DABBA**: Update when live

## Automated Method (Optional)

If you want to automate screenshot capture:

### 1. Install Puppeteer
```bash
cd portfolio-frontend
npm install puppeteer --save-dev
```

### 2. Update URLs in generate-screenshots.js
Edit the file and add your actual live URLs.

### 3. Run the Script
```bash
node generate-screenshots.js
```

## Pro Tips 🎯

### **Best Screenshot Practices:**
1. **Clear browser cache** before taking screenshots
2. **Use incognito/private mode** to avoid extensions
3. **Wait for page to fully load** including animations
4. **Capture the "hero section"** or main interface
5. **Avoid personal information** in screenshots
6. **Use consistent browser zoom** (100%)

### **Alternative Screenshot Tools:**
- **Windows**: Snipping Tool, Win + Shift + S
- **macOS**: Cmd + Shift + 4  
- **Browser Extensions**: Full Page Screen Capture
- **Online Tools**: screenshot.guru, web-capture.net

### **Fallback Handling:**
The code already includes smart fallback - if an image fails to load, it will show a colored placeholder with your project name.

## Current Status:
- ✅ Image paths updated in Projects.jsx
- ✅ Fallback handling implemented  
- ✅ Directory structure created
- ⏳ Screenshots needed for all projects

Once you add the screenshot files, your portfolio will display real previews of your applications! 🚀
