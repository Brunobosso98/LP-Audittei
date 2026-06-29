import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import HomePage from "@/routes/home"
import AuditorFiscalPage from "@/routes/auditor-fiscal"
import GestaoPage from "@/routes/gestao"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="Inttax-theme">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auditor-fiscal" element={<AuditorFiscalPage />} />
          <Route path="/gestao" element={<GestaoPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  )
}
