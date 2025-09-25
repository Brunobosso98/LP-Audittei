import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface NttaxLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const LOGO_SIZES = {
  sm: { width: 96, height: 24, fontSize: "text-base" },
  md: { width: 128, height: 32, fontSize: "text-xl" },
  lg: { width: 160, height: 40, fontSize: "text-2xl" },
} as const

export default function NttaxLogo({ className = "", size = "md" }: NttaxLogoProps) {
  const currentSize = LOGO_SIZES[size]

  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Ir para a pagina inicial">
      <motion.span
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img
          src="/logo-dark.svg"
          alt="INTTAX Logo"
          width={currentSize.width}
          height={currentSize.height}
          className="object-contain w-10 h-10"
        />
        <span className={`${currentSize.fontSize} font-bold text-white`}>INTTAX</span>
      </motion.span>
    </Link>
  )
}
