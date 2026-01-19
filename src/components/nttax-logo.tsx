import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

interface NttaxLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const LOGO_SIZES = {
  sm: { width: 96, height: 24, fontSize: "text-base", iconSize: "w-10 h-10" },
  md: { width: 128, height: 32, fontSize: "text-xl", iconSize: "w-10 h-10" },
  lg: { width: 160, height: 40, fontSize: "text-2xl", iconSize: "w-10 h-10" },
} as const

export default function NttaxLogo({ className = "", size = "md" }: NttaxLogoProps) {
  const currentSize = LOGO_SIZES[size]
  const { theme } = useTheme()
  const logoSrc = theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"

  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Ir para a pagina inicial">
      <motion.span
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img
          src={logoSrc}
          alt="INTTAX Logo"
          width={currentSize.width}
          height={currentSize.height}
          className={`object-contain ${currentSize.iconSize}`}
        />
        <span className={`${currentSize.fontSize} font-bold text-foreground`}>INTTAX</span>
      </motion.span>
    </Link>
  )
}
