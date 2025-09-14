'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Award, Medal, Star } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'Smart India Hackathon (SIH)',
    description: 'Participated in the prestigious Smart India Hackathon, showcasing innovative solutions for real-world problems.',
    category: 'Hackathon',
    year: '2024',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
    details: 'Competed in the national-level hackathon with thousands of participants, presenting innovative tech solutions to solve societal challenges.'
  },
  {
    id: 2,
    title: 'Certificate of Innovation',
    description: 'Received recognition for the Locus project - a location-oriented camera utility system.',
    category: 'Innovation',
    year: '2024',
    icon: Award,
    color: 'from-blue-400 to-purple-500',
    details: 'Awarded for developing an innovative camera utility system that leverages geographical data to provide context-aware features.'
  },
  {
    id: 3,
    title: '1st Rank - World Mathematics Day',
    description: 'Secured first position in the World Mathematics Day Project Competition.',
    category: 'Mathematics',
    year: '2023',
    icon: Medal,
    color: 'from-green-400 to-teal-500',
    details: 'Demonstrated exceptional mathematical problem-solving skills and innovative project presentation in the international competition.'
  },
  {
    id: 4,
    title: 'Academic Excellence',
    description: 'Consistently maintaining high academic performance with a GPA of 8.5/10.',
    category: 'Academic',
    year: '2022-2026',
    icon: Star,
    color: 'from-pink-400 to-rose-500',
    details: 'Maintained excellent academic record throughout the B.Tech program in AI & Data Science, balancing studies with practical projects.'
  }
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" ref={ref} className="section-padding">
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
              Achievements & Recognition
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
              Recognition for excellence in innovation, academics, and problem-solving
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="card h-full p-6 text-center relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        •
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Beyond Awards
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  While these recognitions are meaningful, my greatest achievement is the continuous growth 
                  and the positive impact I create through my work. I believe in learning from every experience 
                  and using it to build better solutions for the future.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400">Hackathons Participated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400">Dedication to Learning</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

