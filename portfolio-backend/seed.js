const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const sampleProjects = [
  {
    title: 'Mocca (Real-Time Communication)',
    description: 'Implemented peer-to-peer communication using WebRTC for low-latency calls. Enabled room-based communication and dynamic video stream switching.',
    image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Mocca',
    technologies: ['MERN Stack', 'WebRTC', 'Socket.io', 'React'],
    githubUrl: 'https://github.com/Harshit057',
    liveUrl: 'https://example.com',
    featured: true,
    category: 'fullstack'
  },
  {
    title: 'CityPulse (Traffic Analysis)',
    description: 'Supports heatmap uploads and processes them to extract congestion and traffic density metrics. Visualizes results through interactive charts and geospatial maps.',
    image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=CityPulse',
    technologies: ['Data Visualization', 'AI & GIS', 'D3.js', 'Leaflet'],
    githubUrl: 'https://github.com/Harshit057',
    liveUrl: 'https://example.com',
    featured: true,
    category: 'ai'
  },
  {
    title: 'SellHole (E-Commerce Platform)',
    description: 'Eliminates middlemen by enabling transparent and direct trade. Scalable backend using Node.js and MongoDB with secure user authentication.',
    image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=SellHole',
    technologies: ['MERN Stack', 'JWT Auth', 'MongoDB', 'Social Impact'],
    githubUrl: 'https://github.com/Harshit057',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'web'
  },
  {
    title: 'AI Tutor (Educational Tech)',
    description: 'Smart routing system connects to Ollama, LLaMA.cpp, or OpenAI APIs based on question type. Specialized for academic domains using custom knowledge bases.',
    image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=AI+Tutor',
    technologies: ['Hybrid AI', 'LLM', 'Ollama', 'Local Privacy'],
    githubUrl: 'https://github.com/Harshit057',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'ai'
  },
  {
    title: 'DABBA (Food-Tech Platform)',
    description: 'Enables housewives to monetize cooking skills while solving affordability and nutrition for students. Built role-based dashboards with order management.',
    image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=DABBA',
    technologies: ['MERN Stack', 'Community Empowerment', 'Real-time', 'Reviews'],
    githubUrl: 'https://github.com/Harshit057',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'web'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`Successfully inserted ${insertedProjects.length} projects`);

    // Display inserted projects
    insertedProjects.forEach(project => {
      console.log(`- ${project.title} (${project.featured ? 'Featured' : 'Regular'})`);
    });

    console.log('\nDatabase seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 