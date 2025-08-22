import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

import NavbarProfile from "./components/NavbarProfile"
import Dashboard from "./components/teacxherdashboard"
import Login from "./components/login"
import Register from "./components/register"
import LandingPage from "./components/index"  

function App() {
  return (
    <TooltipProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <NavbarProfile />

          <main className="p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>

          <Toaster />
          <Sonner />
        </div>
      </Router>
    </TooltipProvider>
  )
}

export default App
