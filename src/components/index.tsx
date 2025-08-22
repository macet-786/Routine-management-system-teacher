import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center px-4">
      
      {/* Animated Logo */}
      <motion.img
        src="/macet-logo.png"
        alt="MACET Logo"
        className="w-32 h-32 mb-6"
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
        className="text-sm md:text-base text-gray-200 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Neora, Patna
      </motion.p>

      {/* Intro text */}
      <motion.p
        className="max-w-xl text-gray-100 mb-8"
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
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Get Started
      </motion.button>
    </div>
  )
}
