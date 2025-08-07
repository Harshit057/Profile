require('dotenv').config();
const { sendContactEmail } = require('./utils/emailService');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('Email settings:');
  console.log('- Host:', process.env.EMAIL_HOST);
  console.log('- Port:', process.env.EMAIL_PORT);
  console.log('- User:', process.env.EMAIL_USER);
  console.log('- To Email:', process.env.TO_EMAIL);
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Email configuration missing!');
    console.log('Please set EMAIL_USER and EMAIL_PASS in your .env file');
    console.log('See EMAIL_SETUP.md for instructions');
    return;
  }

  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Message from Portfolio',
      message: 'This is a test message to verify that the email functionality is working correctly. If you receive this email, the contact form is properly configured!'
    };

    console.log('\nSending test email...');
    const result = await sendContactEmail(testData);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('\nCheck your email inbox for the test message.');
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Check your .env file configuration');
    console.log('2. Ensure you\'re using an App Password (not regular password)');
    console.log('3. Verify 2-Factor Authentication is enabled');
    console.log('4. See EMAIL_SETUP.md for detailed instructions');
  }
}

testEmail(); 