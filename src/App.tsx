import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import HomePage from "@/routes/home"
import AuditorFiscalPage from "@/routes/auditor-fiscal"
import GestaoPage from "@/routes/gestao"
import ReformaTributariaPage from "@/routes/reforma-tributaria"

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
          <Route path="/reforma-tributaria" element={<ReformaTributariaPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  )
}
