# Harshit Sharma - Portfolio

A modern, responsive portfolio website for Harshit Sharma - Software Developer and Full-Stack Engineer with expertise in AI Model Refinement, Cloud Computing (AWS/Azure), Cybersecurity and Web Development.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Full-Stack**: React frontend with Node.js/Express backend
- **Database**: MongoDB for storing projects and contact messages
- **Contact Form**: Functional contact form with email notifications
- **Project Management**: Dynamic project display with filtering
- **Resume Download**: Direct download functionality for resume
- **Smooth Scrolling**: Smooth navigation between sections

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React (Icons)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer (Email notifications)
- CORS
- dotenv

## 📁 Project Structure

```
portfolio/
├── portfolio-frontend/          # React frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   ├── public/
│   │   └── resume.pdf         # Resume file
│   └── package.json
├── portfolio-backend/           # Node.js backend
│   ├── models/                 # MongoDB models
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/                 # API routes
│   │   ├── projects.js
│   │   └── contact.js
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud) - Optional, fallback data will be used if not available
- npm or yarn

### Option 1: Quick Start (Recommended)
Use the provided startup script:

**Windows:**
```bash
# Run the batch file
start-portfolio.bat

# Or use PowerShell
powershell -ExecutionPolicy Bypass -File start-portfolio.ps1
```

**Manual Setup:**
```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies for both frontend and backend
cd portfolio-backend && npm install && cd ..
cd portfolio-frontend && npm install && cd ..

# Start both servers
start-portfolio.bat
```

### Option 2: Manual Setup

#### 1. Backend Setup
```bash
cd portfolio-backend

# Install dependencies
npm install

# Create .env file (copy from env.example)
cp env.example .env

# Update .env with your MongoDB connection string (optional)
# MONGODB_URI=mongodb://localhost:27017/portfolio

# Seed the database with sample projects (optional)
npm run seed

# Start the development server
npm run dev
```

#### 2. Frontend Setup
```bash
cd portfolio-frontend

# Install dependencies
npm install

# Create .env file (copy from env.example)
cp env.example .env

# Add your resume PDF to the public folder
# Replace public/resume.pdf with your actual resume

# Start the development server
npm run dev
```

### 3. Access the application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Troubleshooting

**Projects not loading?**
- The frontend now has improved error handling and will show sample projects if the backend is unavailable
- Check if the backend is running on port 5000
- If using MongoDB, ensure it's running on port 27017
- Run `npm run seed` in the backend directory to populate the database

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📧 Email Setup

The contact form now sends email notifications to your inbox. To set up email functionality:

### Quick Setup
Run the email setup helper:
```bash
# Windows
setup-email.bat

# PowerShell
powershell -ExecutionPolicy Bypass -File setup-email.ps1
```

### Manual Setup
1. **Gmail Configuration**:
   - Enable 2-Factor Authentication on your Gmail account
   - Generate an App Password (Google Account > Security > 2-Step Verification > App passwords)
   - Copy the 16-character app password

2. **Environment Variables**:
   Add these to your `portfolio-backend/.env` file:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   TO_EMAIL=harshitsharmasncp1.212@gmail.com
   ```

3. **Test the Setup**:
   ```bash
   cd portfolio-backend
   npm run test-email
   ```

For detailed instructions, see `portfolio-backend/EMAIL_SETUP.md`.

## 📝 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `POST /api/contact` - Submit a contact message (sends email notification)

## 👨‍💻 About Harshit Sharma

**Software Developer and Full-Stack Engineer** with experience in:
- AI Model Refinement and Machine Learning
- Cloud Computing (AWS/Azure)
- Cybersecurity and Ethical Hacking
- Web Development (MERN Stack)
- Data Science and Visualization

### Skills
- **Languages**: Python, Java, C++, C#, C, JavaScript (ES6+), SQL, Bash
- **AI/ML**: TensorFlow, Keras, PyTorch, Scikit-learn, NLP, NLTK, SpaCy, Transformers, Predictive Modeling, LLM Evaluation, Prompt Engineering, Model Training & Fine-Tuning, OpenAI API, Hugging Face, AI Code Analysis
- **Web Development**: MERN Stack, Vite, Next.js, Redux, Tailwind CSS, Bootstrap, Firebase, REST APIs, JWT Auth, Responsive UI
- **Cloud & Security**: AWS, Azure, Docker, Kali Linux, Network Security, OWASP Top 10, Ethical Hacking, Metasploit, Nmap, Burp Suite

### Experience
- **Machine Learning Engineer** at Alignerr (March 2025 - Present)
- **Machine Learning Engineer** at Outlier AI (Sep 2023 - Jun 2025)
- **Cybersecurity Trainee** at IBM (Feb 2025 - April 2025)
- **Software Engineer(AI) Intern** at ShadowFox (Sep 2024 - Oct 2024)

### Education
- **B.Tech in Information Technology** at Dr. A.P.J. Abdul Kalam Technical University (AKTU)
- Sept 2022 – May 2026

## 🎨 Customization

### Personal Information
The portfolio is already customized with Harshit Sharma's information:
- Name and title in Hero section
- Experience and skills in About section
- Contact information throughout
- Social links (GitHub, LinkedIn, LeetCode)

### Projects
Current projects include:
- **Mocca**: Real-time communication platform
- **CityPulse**: Traffic analysis with AI & GIS
- **SellHole**: E-commerce platform for direct trade
- **AI Tutor**: Educational tech with hybrid AI
- **DABBA**: Food-tech platform for community empowerment

### Resume Download
- Resume download functionality is implemented
- Place your resume PDF in `portfolio-frontend/public/resume.pdf`
- Download button available in Hero section and Footer

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd portfolio-frontend
npm run build
```

### Backend (Railway/Render)
```bash
cd portfolio-backend
npm start
```

## 🤝 Contact

- **Email**: harshitsharmasncp1.212@gmail.com
- **Phone**: +91 8957688223
- **Location**: India
- **GitHub**: https://github.com/Harshit057
- **LinkedIn**: https://linkedin.com/in/harshit057
- **LeetCode**: https://leetcode.com/u/harshit057

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling 