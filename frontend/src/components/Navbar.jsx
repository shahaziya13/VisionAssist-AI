import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCamera,
  FaFileAlt,
  FaHistory,
  FaUserCircle,
  FaSignOutAlt,
  FaRobot,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  const active = (path) =>
    location.pathname === path
      ? "bg-white text-blue-700 shadow-lg"
      : "text-white hover:bg-white/20";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-xl">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="bg-white text-blue-700 p-3 rounded-full shadow-lg">
            <FaRobot size={22} />
          </div>

          <div>
            <h1 className="text-white text-2xl font-extrabold">
              VisionAssistAI
            </h1>

            <p className="text-blue-100 text-xs">
              AI Powered Vision System
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3">

          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 ${active(
              "/dashboard"
            )}`}
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/object-detection"
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 ${active(
              "/object-detection"
            )}`}
          >
            <FaCamera />
            Detection
          </Link>

          <Link
            to="/ocr"
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 ${active(
              "/ocr"
            )}`}
          >
            <FaFileAlt />
            OCR
          </Link>

          <Link
            to="/history"
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 ${active(
              "/history"
            )}`}
          >
            <FaHistory />
            History
          </Link>

          <Link
            to="/profile"
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 ${active(
              "/profile"
            )}`}
          >
            <FaUserCircle />
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 transition-all text-white px-5 py-2 rounded-xl flex items-center gap-2 shadow-lg"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;