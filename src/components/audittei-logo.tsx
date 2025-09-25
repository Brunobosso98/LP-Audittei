"use client"

import { motion } from "framer-motion"

interface AuditteLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function InttaxLogo({ className = "", size = "md" }: AuditteLogoProps) {
  const sizes = {
    sm: { width: 120, height: 32, fontSize: "text-lg" },
    md: { width: 160, height: 40, fontSize: "text-2xl" },
    lg: { width: 200, height: 50, fontSize: "text-3xl" },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
        <svg width={currentSize.width} height={currentSize.height} viewBox="0 0 160 40" className="overflow-visible">
          {/* Background glow effect */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="30%" stopColor="#8B5CF6" />
              <stop offset="60%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stylized 'A' that serves as logo */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Main 'A' structure */}
            <path
              d="M 8 32 L 16 8 L 24 32 M 12 24 L 20 24"
              stroke="url(#logoGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
            />

            {/* Decorative elements around the A */}
            <motion.circle
              cx="16"
              cy="6"
              r="2"
              fill="url(#logoGradient)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Tech-inspired geometric elements */}
            <motion.polygon
              points="4,30 8,26 8,30"
              fill="url(#logoGradient)"
              opacity="0.6"
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.polygon
              points="24,30 28,26 28,30"
              fill="url(#logoGradient)"
              opacity="0.6"
              animate={{
                rotateZ: [360, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.g>

          {/* Company name with integrated 'A' */}
          <motion.text
            x="36"
            y="26"
            className={`${currentSize.fontSize} font-bold fill-current`}
            style={{ fill: "url(#logoGradient)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            udittei
          </motion.text>

          {/* Subtle underline animation */}
          <motion.line
            x1="36"
            y1="30"
            x2="150"
            y2="30"
            stroke="url(#logoGradient)"
            strokeWidth="1"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </svg>

        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rose-400 rounded-full opacity-30"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
