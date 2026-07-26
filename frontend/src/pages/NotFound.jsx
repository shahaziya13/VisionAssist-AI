import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">

      <FaRobot
        size={100}
        className="mb-6 animate-bounce"
      />

      <h1 className="text-8xl font-extrabold">
        404
      </h1>

      <h2 className="text-3xl mt-5 font-bold">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 text-blue-100">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/dashboard"
        className="mt-10 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}

export default NotFound;