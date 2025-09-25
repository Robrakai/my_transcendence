import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"

import Home from "@/pages/Home"
import Test from "@/pages/Test"
import Ladder from "@/pages/Ladder"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ladder" element={<Ladder />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
