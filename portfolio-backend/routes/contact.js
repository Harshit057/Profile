const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/emailService');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    // Input validation
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'All fields are required (name, email, subject, message)' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address' 
      });
    }

    // Length validation
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return res.status(400).json({ 
        message: 'Input too long. Name: max 100, Subject: max 200, Message: max 2000 characters' 
      });
    }

    let savedContact = null;
    let databaseError = false;

    // Try to save to database if connected
    if (mongoose.connection.readyState === 1) {
      try {
        const contact = new Contact({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          subject: subject.trim(),
          message: message.trim()
        });
        savedContact = await contact.save();
      } catch (dbError) {
        console.error('Database save failed:', dbError);
        databaseError = true;
      }
    } else {
      console.warn('⚠️  Database not connected - contact message not saved to database');
      databaseError = true;
    }
    
    // Send email notification regardless of database status
    try {
      await sendContactEmail({
        name: name,
        email: email,
        subject: subject,
        message: message
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, just log it
    }

    // Prepare response
    const responseData = {
      message: 'Message sent successfully!',
      contact: savedContact ? {
        _id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        subject: savedContact.subject,
        createdAt: savedContact.createdAt
      } : {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        subject: subject.trim(),
        timestamp: new Date().toISOString()
      }
    };

    // Add warning if database failed
    if (databaseError) {
      responseData.warning = 'Message processed but not saved to database due to connection issues.';
    }

    res.status(201).json(responseData);
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle specific mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors 
      });
    }
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'Duplicate entry detected' 
      });
    }
    
    res.status(500).json({ 
      message: 'Internal server error. Please try again later.' 
    });
  }
});

// Get all contact messages (for admin)
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database temporarily unavailable' });
    }
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get contact message by ID
router.get('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database temporarily unavailable' });
    }
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete contact message
router.delete('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database temporarily unavailable' });
    }
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    await contact.deleteOne();
    res.json({ message: 'Contact message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 