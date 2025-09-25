import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import HomePage from "@/routes/home"
import AuditorFiscalPage from "@/routes/auditor-fiscal"
import AuditorNFSePage from "@/routes/auditor-nfse"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="Inttax-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auditor-fiscal" element={<AuditorFiscalPage />} />
          <Route path="/auditor-nfse" element={<AuditorNFSePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  )
}
