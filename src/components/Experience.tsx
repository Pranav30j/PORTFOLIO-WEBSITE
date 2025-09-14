'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Web Development Intern',
    company: 'Cnvrtools',
    location: 'Remote',
    duration: '3 months',
    period: '2025',
    description: 'Developed responsive web applications using modern frameworks and technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Built 3+ responsive web applications',
      'Improved application performance by 40%',
      'Collaborated with 5+ team members'
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Unified Mentor Pvt. Ltd.',
    location: 'Remote',
    duration: '3 months',
    period: '2025',
    description: 'Analyzed large datasets and built machine learning models to extract actionable insights. Created data visualizations and reports for stakeholders.',
    achievements: [
      'Developed 2+ ML models with 85%+ accuracy',
      'Created interactive data visualizations',
      'Reduced data processing time by 60%'
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter']
  },
  {
    id: 3,
    title: 'Digital Marketing Intern',
    company: 'Sharify Adverts',
    location: 'Remote',
    duration: '3 months',
    period: '2024',
    description: 'Managed digital marketing campaigns and analyzed performance metrics. Created content and optimized social media presence for various clients.',
    achievements: [
      'Increased social media engagement by 50%',
      'Managed 10+ client accounts',
      'Generated 30% more leads through digital campaigns'
    ],
    tech: ['Google Analytics', 'Facebook Ads', 'Instagram Marketing', 'Content Creation']
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Professional Experience
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
              Building experience through hands-on internships and real-world projects
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-indigo-600 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 z-10" />

                  {/* Content */}
                  <div className="ml-0 md:ml-16 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card p-8"
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              <span className="font-medium">{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{experience.period} • {experience.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.5, delay: 1 + index * 0.2 + idx * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I&apos;m always looking for new opportunities to grow and contribute to meaningful projects. 
                Let&apos;s discuss how I can bring value to your team.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Let&apos;s Connect
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

