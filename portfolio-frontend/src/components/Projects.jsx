import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import axios from 'axios';

// Import project images
import moccaImage from '../assets/project-pictures/MOCCA.png';
import cnuteImage from '../assets/project-pictures/CNUTE.png';
import sellholeImage from '../assets/project-pictures/SELLHOLE.png';
import komodoImage from '../assets/project-pictures/KOMODO.png';
import citypulseImage from '../assets/project-pictures/CITYPULSE.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample fallback data
  const fallbackProjects = [
    {
      _id: '1',
      title: 'Mocca (Real-Time Communication)',
      description: 'Implemented peer-to-peer communication using WebRTC for low-latency calls. Enabled room-based communication and dynamic video stream switching.',
      image: moccaImage,
      technologies: ['MERN Stack', 'WebRTC', 'Socket.io', 'React'],
      githubUrl: 'https://github.com/Harshit057/mocca',
      liveUrl: 'https://mocca-kappa.vercel.app/',
      featured: true,
      category: 'fullstack'
    },
    {
      _id: '2',
      title: 'CityPulse (Traffic Analysis)',
      description: 'Supports heatmap uploads and processes them to extract congestion and traffic density metrics. Visualizes results through interactive charts and geospatial maps.',
      image: citypulseImage,
      technologies: ['Data Visualization', 'AI & GIS', 'D3.js', 'Leaflet'],
      githubUrl: 'https://github.com/Harshit057/citypulse',
      liveUrl: 'https://citypulse-production.up.railway.app/',
      featured: true,
      category: 'ai'
    },
    {
      _id: '3',
      title: 'SellHole (E-Commerce Platform)',
      description: 'Eliminates middlemen by enabling transparent and direct trade. Scalable backend using Node.js and MongoDB with secure user authentication.',
      image: sellholeImage,
      technologies: ['MERN Stack', 'JWT Auth', 'MongoDB', 'Social Impact'],
      githubUrl: 'https://github.com/Harshit057/sellhole',
      liveUrl: 'https://sellhole.vercel.app/',
      featured: false,
      category: 'web'
    },
    {
      _id: '4',
      title: 'KOMODO(multiple specialized AI)',
      description: 'Hybrid research and engineering project that explores how multiple specialized AI agents can collaborate, debate, and solve complex problems in real time.',
      image: komodoImage,
      technologies: ['Hybrid AI', 'LLM', 'Ollama', 'Local Privacy'],
      githubUrl: 'https://github.com/Harshit057/Komodo.git',
      liveUrl: 'https://komodo-mu.vercel.app/',
      featured: false,
      category: 'ai'
    },
    {
      _id: '5',
      title: 'CNUTE (De-FI Platform)',
      description: 'A production-ready, serverless DeFi platform that enables autonomous treasury operations, cross-chain interactions, and compliance-aware financial operations through AI agent',
      image: cnuteImage,
      technologies: ['MERN Stack', 'Community Empowerment', 'Real-time', 'Reviews'],
      githubUrl: 'https://github.com/Harshit057/cnute',
      liveUrl: 'https://aws.amazon.com/codedeploy/',
      featured: false,
      category: 'web'
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Create axios instance with timeout
        const api = axios.create({
          timeout: 5000, // 5 second timeout
          baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
        });

        const response = await api.get('/projects');
        
        // Check if response has data
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setProjects(response.data);
          setError(null);
        } else {
          // If API returns empty array, use fallback data
          console.log('API returned empty projects, using fallback data');
          setProjects(fallbackProjects);
          setError('No projects found in database, showing sample projects');
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        
        // Use fallback data immediately
        setProjects(fallbackProjects);
        
        // Set appropriate error message based on error type
        if (err.code === 'ECONNABORTED') {
          setError('Request timed out. Showing sample projects.');
        } else if (err.response) {
          setError(`Server error (${err.response.status}). Showing sample projects.`);
        } else if (err.request) {
          setError('Cannot connect to server. Showing sample projects.');
        } else {
          setError('Failed to load projects. Showing sample projects.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in AI, web development, and social impact.
          </p>
        </motion.div>

        {error && projects.length === 0 && (
          <div className="text-center mb-8">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} featured />
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Harshit057?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, featured = false }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image based on project category and title
  const getFallbackImage = () => {
    const colors = {
      'fullstack': '6366f1',
      'ai': '8b5cf6', 
      'web': '06b6d4'
    };
    const color = colors[project.category] || '10b981';
    const title = encodeURIComponent(project.title.split(' ')[0]);
    return `https://via.placeholder.com/400x250/${color}/ffffff?text=${title}`;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`w-full max-w-sm mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-300 ${
        featured ? 'md:max-w-none' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageError ? getFallbackImage() : project.image}
          alt={project.title}
          onError={handleImageError}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600/50 transition-colors duration-300"
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text
              -white rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              {project.title.toLowerCase().includes('cnute') ? 'Deploy Own' : 'Live Demo'}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 