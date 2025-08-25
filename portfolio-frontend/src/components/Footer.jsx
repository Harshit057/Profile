import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Harshit057',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/harshit057',
      color: 'hover:text-blue-400'
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://twitter.com/harshit057',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LeetCode',
      icon: <Code size={20} />,
      url: 'https://leetcode.com/u/harshit057',
      color: 'hover:text-orange-400'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:harshitsharmasncp1.212@gmail.com',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Harshit Sharma</h3>
            <p className="text-gray-400 mb-6">
              Software Developer and Full-Stack Engineer passionate about building scalable 
              AI-driven solutions and secure cloud architectures.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-500 transition-colors duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Contact', 'Resume'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      if (item === 'Resume') {
                        const link = document.createElement('a');
                        link.href = '/resume.pdf';
                        link.download = 'Harshit_Sharma_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>harshitsharmasncp1.212@gmail.com</p>
              <p>+91 8957688223</p>
              <p>India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Harshit Sharma. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Empowering innovation through creativity and cutting-edge digital solutions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 