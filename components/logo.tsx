"use client"

import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { container: "h-8", text: "text-xl", icon: "w-8 h-8" },
    md: { container: "h-10", text: "text-2xl", icon: "w-10 h-10" },
    lg: { container: "h-12", text: "text-3xl", icon: "w-12 h-12" },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center space-x-2 ${currentSize.container} ${className}`}>
      {/* Logo A integrado */}
      <motion.div
        className={`relative ${currentSize.icon} flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Background gradient circle */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Inner background */}
        <div className="absolute inset-0.5 bg-background dark:bg-slate-900 rounded-lg" />

        {/* Letter A */}
        <motion.div
          className="relative z-10 font-bold text-transparent bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 bg-clip-text"
          style={{ fontSize: size === "sm" ? "1.25rem" : size === "md" ? "1.5rem" : "1.75rem" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          A
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Text with integrated A */}
      <motion.div
        className={`font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent ${currentSize.text}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        udittei
      </motion.div>
    </div>
  )
}
