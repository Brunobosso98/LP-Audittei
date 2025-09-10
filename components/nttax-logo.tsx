"use client"

import { motion } from "framer-motion"

interface NttaxLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function NttaxLogo({ className = "", size = "md" }: NttaxLogoProps) {
  const sizes = {
    sm: { width: 120, height: 32, fontSize: "text-lg" },
    md: { width: 160, height: 40, fontSize: "text-2xl" },
    lg: { width: 200, height: 50, fontSize: "text-3xl" },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div 
        className="relative" 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: "spring", stiffness: 400 }}
      >
        <svg 
          width={currentSize.width} 
          height={currentSize.height} 
          viewBox="0 0 160 40" 
          className="overflow-visible"
        >
          {/* Gradient definition for rose colors */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="50%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stylized 'I' with rounded edges */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Main vertical stroke of I with rounded ends */}
            <rect
              x="16"
              y="10"
              width="4"
              height="20"
              rx="2"
              fill="url(#logoGradient)"
              filter="url(#glow)"
            />
            
            {/* Top cap of I with rounded corners */}
            <rect
              x="14"
              y="8"
              width="8"
              height="4"
              rx="2"
              fill="url(#logoGradient)"
              filter="url(#glow)"
            />
            
            {/* Bottom cap of I with rounded corners */}
            <rect
              x="14"
              y="28"
              width="8"
              height="4"
              rx="2"
              fill="url(#logoGradient)"
              filter="url(#glow)"
            />

            {/* Decorative dot above the I */}
            <motion.circle
              cx="18"
              cy="4"
              r="2"
              fill="url(#logoGradient)"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Decorative elements */}
            <motion.circle
              cx="10"
              cy="15"
              r="1.5"
              fill="url(#logoGradient)"
              opacity="0.7"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.circle
              cx="26"
              cy="25"
              r="1.5"
              fill="url(#logoGradient)"
              opacity="0.7"
              animate={{
                y: [0, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.g>

          {/* Company name */}
          <motion.text
            x="38"
            y="26"
            className={`${currentSize.fontSize} font-bold fill-current`}
            style={{ fill: "url(#logoGradient)" }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            nttax
          </motion.text>

          {/* Subtle underline */}
          <motion.line
            x1="38"
            y1="30"
            x2="100"
            y2="30"
            stroke="url(#logoGradient)"
            strokeWidth="1"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
