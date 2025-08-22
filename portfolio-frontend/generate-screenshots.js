// Screenshot Generator Script
// Run this with: node generate-screenshots.js

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'mocca-screenshot.png',
    url: 'https://mocca-kappa.vercel.app/',
    description: 'Mocca - Real-Time Communication App'
  },
  // Add more projects as they become available
  // {
  //   name: 'citypulse-screenshot.png',
  //   url: 'https://your-citypulse-url.com',
  //   description: 'CityPulse - Traffic Analysis'
  // },
  // {
  //   name: 'sellhole-screenshot.png', 
  //   url: 'https://your-sellhole-url.com',
  //   description: 'SellHole - E-Commerce Platform'
  // },
  // {
  //   name: 'ai-tutor-screenshot.png',
  //   url: 'https://your-ai-tutor-url.com', 
  //   description: 'AI Tutor - Educational Tech'
  // },
  // {
  //   name: 'dabba-screenshot.png',
  //   url: 'https://your-dabba-url.com',
  //   description: 'DABBA - Food-Tech Platform'
  // }
];

const outputDir = './public/images/projects';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureScreenshot(project) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport size for consistent screenshots
    await page.setViewport({ 
      width: 1200, 
      height: 800,
      deviceScaleFactor: 1
    });
    
    console.log(`📸 Capturing screenshot for: ${project.description}`);
    console.log(`🔗 URL: ${project.url}`);
    
    // Navigate to the page
    await page.goto(project.url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait a bit more for any animations or dynamic content
    await page.waitForTimeout(2000);
    
    // Take screenshot
    const outputPath = path.join(outputDir, project.name);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 800
      }
    });
    
    console.log(`✅ Screenshot saved: ${outputPath}`);
    
  } catch (error) {
    console.error(`❌ Error capturing ${project.name}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function generateAllScreenshots() {
  console.log('🚀 Starting screenshot generation...\n');
  
  for (const project of projects) {
    await captureScreenshot(project);
    console.log(''); // Empty line for readability
  }
  
  console.log('🎉 Screenshot generation completed!');
  console.log(`📁 Screenshots saved to: ${outputDir}`);
}

// Run the script
generateAllScreenshots().catch(console.error);
