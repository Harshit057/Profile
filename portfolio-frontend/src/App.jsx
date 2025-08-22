import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplineBackground from './components/SplineBackground';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen relative">
          <SplineBackground />
          <div className="relative z-10 min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ErrorBoundary>
                    <Hero />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <Projects />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <Contact />
                  </ErrorBoundary>
                </motion.div>
              } />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
