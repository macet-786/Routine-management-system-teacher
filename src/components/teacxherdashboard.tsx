import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [teacherName, setTeacherName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get logged in teacher from localStorage
    const loggedInTeacher = JSON.parse(localStorage.getItem("loggedInTeacher") || "{}");

    if (loggedInTeacher && loggedInTeacher.fullName) {
      setTeacherName(loggedInTeacher.fullName);
    } else {
      // If no user found, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInTeacher");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Welcome, {teacherName}! 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          This is your teacher dashboard. Here you can manage courses, students, and schedules.
        </p>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-200 rounded-xl shadow hover:scale-105 transition">
            <h2 className="text-xl font-semibold">📚 Courses</h2>
            <p className="text-gray-700">Manage and update your courses</p>
          </div>
          <div className="p-6 bg-blue-200 rounded-xl shadow hover:scale-105 transition">
            <h2 className="text-xl font-semibold">👨‍🎓 Students</h2>
            <p className="text-gray-700">Track and support students</p>
          </div>
          <div className="p-6 bg-yellow-200 rounded-xl shadow hover:scale-105 transition">
            <h2 className="text-xl font-semibold">🗓 Schedule</h2>
            <p className="text-gray-700">View & manage class routines</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
