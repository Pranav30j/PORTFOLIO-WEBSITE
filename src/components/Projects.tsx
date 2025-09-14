'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import ProjectImage from './ProjectImage'

const projects = [
  {
    id: 1,
    title: 'Locus',
    description: 'A location-oriented camera utility system that provides intelligent camera features based on geographical context.',
    shortDescription: 'Location-oriented camera utility system with intelligent features.',
    imageSrc: '/locus-thumbnail.svg',
    tech: ['Python', 'OpenCV', 'Geolocation', 'Android'],
    github: 'https://github.com/pranavbopche/locus',
    demo: 'https://locus-demo.com',
    impact: 'Won Certificate of Innovation at Smart India Hackathon',
    details: 'Locus is an innovative camera utility system that leverages geographical data to provide context-aware camera features. The system uses OpenCV for image processing and integrates with location services to offer intelligent photography suggestions based on the user\'s surroundings.'
  },
  {
    id: 2,
    title: 'IBM HR Analytics Employee Attrition',
    description: 'Machine learning model with Streamlit UI for predicting employee attrition using HR analytics data.',
    shortDescription: 'ML model with Streamlit UI for employee attrition prediction.',
    imageSrc: '/ibm-hr-thumbnail.svg',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/Pranav30j/ibm_hr_attrition_app',
    demo: 'https://ibmhrattritionapp-pranav30j.streamlit.app/',
    impact: 'Achieved 85% accuracy in attrition prediction',
    details: 'This project analyzes HR data to predict employee attrition using various machine learning algorithms. The Streamlit interface provides an intuitive way to input employee data and get predictions, helping HR departments make data-driven decisions.'
  },
  {
    id: 3,
    title: 'Customer Satisfaction Prediction',
    description: 'Machine learning project for predicting customer satisfaction using various data analysis techniques.',
    shortDescription: 'ML project for customer satisfaction insights and prediction.',
    imageSrc: '/customer-satisfaction-thumbnail.svg',
    tech: ['Python', 'Jupyter', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Pranav30j/customer-satisfaction-predictor',
    demo: 'https://customersatisfactionpranav30j.streamlit.app/',
    impact: 'Improved customer retention by 20%',
    details: 'A comprehensive analysis of customer data to predict satisfaction levels. The project includes data preprocessing, feature engineering, model training, and visualization of results to help businesses understand customer behavior patterns.'
  },
  {
    id: 4,
    title: 'AI-Based Personal Expense Tracker',
    description: 'Smart expense tracking system with AI-powered categorization and spending insights.',
    shortDescription: 'Smart expense tracking with AI-powered categorization.',
    imageSrc: '/expense-tracker-thumbnail.svg',
    tech: ['Python', 'Machine Learning', 'Flask', 'SQLite', 'NLP'],
    github: 'https://github.com/Pranav30j/EXPENSO',
    demo: 'https://drive.google.com/drive/folders/1RoP-jK1deyQwUE7ceb_9WQSxqjaIW1fp?usp=sharing',
    impact: 'Helped users save 15% on average monthly expenses',
    details: 'An intelligent expense tracking application that uses machine learning to automatically categorize expenses and provide insights into spending patterns. The system learns from user behavior to improve categorization accuracy over time.'
  },
  {
    id: 5,
    title: 'Personalized Healthcare Recommendation',
    description: 'Ongoing ML project for providing personalized healthcare recommendations based on patient data.',
    shortDescription: 'Ongoing ML project for personalized healthcare recommendations.',
    imageSrc: '/healthcare-thumbnail.svg',
    tech: ['Python', 'Machine Learning', 'Healthcare Data', 'Recommendation Systems'],
    github: 'https://github.com/pranavbopche/healthcare-recommendation',
    demo: 'https://healthcare-recommendation-demo.com',
    impact: 'In development - targeting 90% recommendation accuracy',
    details: 'A sophisticated recommendation system that analyzes patient health data, medical history, and lifestyle factors to provide personalized healthcare recommendations. The project aims to improve patient outcomes through data-driven insights.'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
            >
              A showcase of my work in AI, machine learning, and full-stack development
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="card overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative h-48">
                    <ProjectImage title={project.title} imageSrc={project.imageSrc} className="h-full" />
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center shadow-lg">
                        <ExternalLink size={16} className="text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Impact */}
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {project.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64">
                <ProjectImage title={selectedProject.title} imageSrc={selectedProject.imageSrc} className="h-full" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Details</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Impact</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {selectedProject.impact}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                  
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
