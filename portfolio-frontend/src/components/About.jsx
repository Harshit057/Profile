import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Brain, Shield, Cloud } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      name: 'AI/ML', 
      icon: <Brain size={24} />, 
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'LLM Evaluation', 'OpenAI API'] 
    },
    { 
      name: 'Web Development', 
      icon: <Code size={24} />, 
      items: ['MERN Stack', 'Next.js', 'Redux', 'Tailwind CSS', 'REST APIs', 'JWT Auth'] 
    },
    { 
      name: 'Programming', 
      icon: <Database size={24} />, 
      items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'Bash'] 
    },
    { 
      name: 'Cloud & Security', 
      icon: <Cloud size={24} />, 
      items: ['AWS', 'Azure', 'Docker', 'Kali Linux', 'Network Security', 'OWASP'] 
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Software Developer and Full-Stack Engineer with experience in AI Model Refinement, 
            Cloud Computing (AWS/Azure), Cybersecurity and Web Development. Proficient in Python, 
            Java, C++, and JavaScript.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center mb-16 w-full max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto md:max-w-none"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">March 2025 - Present</h4>
                <p>Machine Learning Engineer at Alignerr</p>
                <p className="text-sm text-gray-400">Engineered dynamic data visualizations and heatmaps using Python to surface insights from complex AI</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Sep 2023 - Jun 2025</h4>
                <p>Machine Learning Engineer at Outlier AI</p>
                <p className="text-sm text-gray-400">Audited LLM responses for high-complexity tasks, validating reasoning across STEM domains</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Feb 2025 - April 2025</h4>
                <p>Cybersecurity Trainee at IBM</p>
                <p className="text-sm text-gray-400">Trained in ethical hacking, network security protocols, and offensive tooling with Kali Linux</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Sep 2024 - Oct 2024</h4>
                <p>Software Engineer(AI) Intern at ShadowFox</p>
                <p className="text-sm text-gray-400">Engineered AI-driven autocorrect keyboard and built ML models for vehicle price forecasting</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto md:max-w-none bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What I Do</h3>
            <div className="space-y-4 text-gray-300">
              <p>• Build scalable AI-driven solutions and secure cloud architectures</p>
              <p>• Develop full-stack web applications using modern technologies</p>
              <p>• Implement machine learning models and data visualization</p>
              <p>• Conduct cybersecurity assessments and ethical hacking</p>
              <p>• Design and optimize database systems</p>
              <p>• Lead technical workshops and mentor students</p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Skills & Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">{skill.name}</h4>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <p key={item} className="text-gray-300 text-sm">{item}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl mx-auto px-4"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Education</h3>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 w-full max-w-3xl mx-auto">
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-white mb-2">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</h4>
              <p className="text-xl text-purple-400 mb-4">B.Tech in Information Technology</p>
              <p className="text-gray-300 mb-6">Sept 2022 – May 2026</p>
              <div className="text-gray-300 text-left max-w-3xl mx-auto">
                <p className="mb-4"><strong>Coursework:</strong> Computer Science- Information Technology, Data Structures, Algorithms, Web Development, Cybersecurity, System Design, Database Management Systems, Artificial Intelligence, Machine Learning, Automation Software Engineering.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 