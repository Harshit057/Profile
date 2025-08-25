const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://profile-a8l9.vercel.app', 'https://harshits-portfolio.vercel.app', /\.vercel\.app$/] 
    : ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Security middleware
app.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  res.header('X-XSS-Protection', '1; mode=block');
  next();
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 contact form submissions per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.'
  },
});

app.use(limiter);

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
  console.warn('⚠️  MongoDB connection failed:', err.message);
  console.log('📝 Server will continue without database. Projects will be served from memory.');
});

// Import routes
const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

// Database connection middleware
const checkDbConnection = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    console.warn('Database not connected for request:', req.path);
    // For GET requests to projects, we could return fallback data
    if (req.path === '/api/projects' && req.method === 'GET') {
      return res.json([]); // Return empty array so frontend can use fallback
    }
    // For contact form, show a warning but allow the request to proceed
    if (req.path === '/api/contact' && req.method === 'POST') {
      console.warn('⚠️  Contact form submitted without database connection - data will not be saved');
      // Continue to the route handler, which should handle the missing database gracefully
      return next();
    }
    // For other requests, return error
    return res.status(503).json({ 
      message: 'Database temporarily unavailable. Please try again later.' 
    });
  }
  next();
};

// Use routes
app.use('/api/projects', checkDbConnection, projectRoutes);
app.use('/api/contact', checkDbConnection, contactLimiter, contactRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  
  // Don't leak error details in production
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({
      message: 'Internal server error'
    });
  } else {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.path
  });
});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  const health = {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    status: 'OK',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    environment: process.env.NODE_ENV || 'development'
  };
  
  try {
    res.status(200).json(health);
  } catch (error) {
    health.status = 'ERROR';
    res.status(503).json(health);
  }
});

// API info endpoint
app.get('/api', (req, res) => {
  res.json({
    message: 'Portfolio API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      projects: '/api/projects',
      contact: '/api/contact'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 