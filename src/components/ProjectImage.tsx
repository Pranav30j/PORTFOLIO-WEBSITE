'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectImageProps {
  title: string
  imageSrc?: string
  className?: string
}

export default function ProjectImage({ title, imageSrc, className = '' }: ProjectImageProps) {
  const firstLetter = title.charAt(0)
  
  if (imageSrc) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-indigo-200/20 dark:from-primary-800/20 dark:to-indigo-800/20" />
      </div>
    )
  }
  
  return (
    <div className={`relative bg-gradient-to-br from-primary-100 to-indigo-100 dark:from-primary-900 dark:to-indigo-900 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-indigo-200/50 dark:from-primary-800/50 dark:to-indigo-800/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.3 }}
          whileHover={{ scale: 1.1, opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-bold text-primary-600 dark:text-primary-400"
        >
          {firstLetter}
        </motion.div>
      </div>
    </div>
  )
}

