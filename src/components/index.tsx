import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function LandingPage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 px-4 py-2 rounded-lg shadow-md bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Animated Logo */}
      <motion.img
        src="/macet.jpeg"
        alt="MACET Logo"
        className="w-32 h-32 mb-6 rounded-full shadow-lg border"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* College Name */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        MAULANA AZAD COLLEGE
      </motion.h1>
      <motion.h2
        className="text-lg md:text-xl font-semibold mb-1"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        OF ENGINEERING & TECHNOLOGY
      </motion.h2>
      <motion.p
        className={`text-sm md:text-base mb-6 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Neora, Patna
      </motion.p>

      {/* Intro text */}
      <motion.p
        className={`max-w-xl mb-8 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Your comprehensive platform for managing teaching schedules, class routines,
        and academic updates. Manage your schedule, classes, and students easily 🚀
      </motion.p>

      {/* Get Started Button */}
      <motion.button
        onClick={() => navigate("/login")}
        className={`font-semibold px-6 py-3 rounded-xl shadow-lg transition ${
          darkMode
            ? "bg-white text-gray-900 hover:bg-gray-200"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Get Started
      </motion.button>
    </div>
  )
}
