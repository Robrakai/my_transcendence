import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"

import Home from "@/pages/Home"
import Test from "@/pages/Test"
import Profile from "@/pages/Profile"
import Ladder from "@/pages/Ladder"
import Game from "@/pages/Game"
import Login from "@/pages/login"
import SignIn from "@/pages/SignIn"
import Tournoi from "@/pages/tournoi"
import LiveChat from "@/pages/liveChat"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ladder" element={<Ladder />} />
		  <Route path="/login" element={<Login />} />
		  <Route path="/signIn" element={<SignIn />} />
		  <Route path="/game" element={<Game />} />
		  <Route path="/tournoi" element={<Tournoi />} />
		  <Route path="/liveChat" element={<LiveChat />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
