'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Prestige Institute of Engineering Management and Research',
    location: 'Indore, Madhya Pradesh',
    duration: '2022 - 2026',
    status: 'Pursuing',
    gpa: '7.6/10',
    highlights: [
      'Specialized in AI and Data Science curriculum',
      'Active participation in hackathons and competitions',
      'Strong foundation in machine learning and statistics',
      'Hands-on experience with real-world projects'
    ],
    relevantCourses: [
      'Machine Learning',
      'Deep Learning',
      'Data Structures & Algorithms',
      'Statistics & Probability',
      'Database Management Systems',
      'Computer Vision',
      'Natural Language Processing',
      'Cloud Computing'
    ]
  }
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={ref} className="section-padding bg-gray-50 dark:bg-dark-800">
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
              Education
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
              Building a strong foundation in AI and Data Science
            </motion.p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-8"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                            {edu.field}
                          </p>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {edu.institution}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={16} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="mt-4 lg:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === 'Pursuing'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Highlights
                    </h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond formal education, I&apos;m constantly learning through online courses, 
                personal projects, and staying updated with the latest technologies in AI and web development. 
                I believe in the power of continuous learning to stay relevant in the fast-evolving tech industry.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

