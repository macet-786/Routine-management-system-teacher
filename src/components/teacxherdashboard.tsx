import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard: React.FC = () => {
  const [teacherName, setTeacherName] = useState<string>("")
  const navigate = useNavigate()

  useEffect(() => {
    // Get logged in teacher from localStorage
    const loggedInTeacher = JSON.parse(localStorage.getItem("loggedInTeacher") || "{}")

    if (loggedInTeacher && loggedInTeacher.fullName) {
      setTeacherName(loggedInTeacher.fullName)
    } else {
      // If no user found, redirect to login
      navigate("/login")
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("loggedInTeacher")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-6">
      {/* ✅ Navbar */}
      <div className="flex items-center justify-between bg-white shadow-md px-6 py-4 rounded-xl mb-6">
        <h1 className="text-xl font-bold text-gray-800">Teacher Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">👋 Welcome, {teacherName}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1.5 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
        <p className="text-gray-600 mb-6 text-lg">
          Here you can manage courses, students, and schedules.
        </p>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/courses")}
            className="p-6 bg-green-200 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">📚 Courses</h2>
            <p className="text-gray-700">Manage and update your courses</p>
          </div>

          <div
            onClick={() => navigate("/students")}
            className="p-6 bg-blue-200 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">👨‍🎓 Students</h2>
            <p className="text-gray-700">Track and support students</p>
          </div>

          <div
            onClick={() => navigate("/schedule")}
            className="p-6 bg-yellow-200 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">🗓 Schedule</h2>
            <p className="text-gray-700">View & manage class routines</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
