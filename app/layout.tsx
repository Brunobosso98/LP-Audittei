import type React from "react"
import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const fredoka = Fredoka({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Inttax - Inteligência Fiscal que Revoluciona",
  description: "Descubra como a inttax simplifica a complexidade fiscal e impulsiona a eficiência do seu negócio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={fredoka.className}>
        <ThemeProvider defaultTheme="dark" storageKey="audittei-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
