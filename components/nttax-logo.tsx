"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }} 
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Image
          src="/logo-dark.svg"
          alt="INTTAX Logo"
          width={currentSize.height}
          height={currentSize.height}
          className="object-contain"
        />
        <span className={`${currentSize.fontSize} font-bold text-white`}>
          INTTAX
        </span>
      </motion.div>
    </div>
  )
}
