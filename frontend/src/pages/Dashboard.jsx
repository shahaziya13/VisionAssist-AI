import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCamera,
  FaFileAlt,
  FaHistory,
  FaUser,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {
  const email = localStorage.getItem("email");

  const cards = [
    {
      title: "Object Detection",
      link: "/object-detection",
      icon: <FaCamera size={35} />,
      color: "from-blue-500 to-cyan-500",
      desc: "Detect multiple objects using YOLOv8",
    },
    {
      title: "OCR Scanner",
      link: "/ocr",
      icon: <FaFileAlt size={35} />,
      color: "from-green-500 to-emerald-500",
      desc: "Extract text from images instantly",
    },
    {
      title: "History",
      link: "/history",
      icon: <FaHistory size={35} />,
      color: "from-purple-500 to-pink-500",
      desc: "View previous AI analyses",
    },
    {
      title: "Profile",
      link: "/profile",
      icon: <FaUser size={35} />,
      color: "from-orange-500 to-red-500",
      desc: "Manage your account details",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

        <div className="max-w-7xl mx-auto px-8 py-10">

          {/* Hero Section */}

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-2xl p-10 text-white">

            <div className="absolute right-8 top-5 opacity-10">
              <FaRobot size={180} />
            </div>

            <h1 className="text-5xl font-extrabold">
              Welcome 👋
            </h1>

            <p className="text-xl text-blue-100 mt-2">
              {email}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8">
              VisionAssistAI helps you detect real-world objects, extract
              text from images using OCR, and manage all your AI results
              in one modern dashboard.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link to="/object-detection">
                <button className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                  Start Detection
                </button>
              </Link>

              <Link to="/ocr">
                <button className="border border-white bg-white/10 px-7 py-3 rounded-xl hover:bg-white/20 transition">
                  Try OCR
                </button>
              </Link>

            </div>

          </div>

          {/* Feature Cards */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 mt-10">

            {cards.map((card, index) => (

              <Link
                key={index}
                to={card.link}
                className="group"
              >

                <div className="bg-white rounded-3xl shadow-xl p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">

                  <div
                    className={`bg-gradient-to-r ${card.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition`}
                  >
                    {card.icon}
                  </div>

                  <h2 className="text-2xl font-bold mb-2">
                    {card.title}
                  </h2>

                  <p className="text-gray-600">
                    {card.desc}
                  </p>

                </div>

              </Link>

            ))}

          </div>

          {/* Bottom Section */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-5">
                <FaChartLine
                  className="text-blue-600"
                  size={28}
                />
                <h2 className="text-2xl font-bold">
                  AI Features
                </h2>
              </div>

              <ul className="space-y-4 text-gray-700">

                <li>✅ YOLOv8 Real-Time Object Detection</li>
                <li>✅ OCR Text Recognition</li>
                <li>✅ Secure User Authentication</li>
                <li>✅ Detection History</li>
                <li>✅ PostgreSQL Database</li>
                <li>✅ FastAPI Backend</li>

              </ul>

            </div>

            <div className="bg-gradient-to-br from-indigo-700 to-purple-700 rounded-3xl shadow-xl p-8 text-white">

              <h2 className="text-3xl font-bold mb-5">
                About VisionAssistAI
              </h2>

              <p className="leading-8 text-blue-100">
                VisionAssistAI is an AI-powered computer vision platform
                built using React, FastAPI, PostgreSQL, OpenCV, YOLOv8 and
                Tesseract OCR. Upload an image to detect multiple objects
                or extract text in seconds with an intuitive interface.
              </p>

            </div>

          </div>

        </div>

        <Footer />

      </div>
    </>
  );
}

export default Dashboard;