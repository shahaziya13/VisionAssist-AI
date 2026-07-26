import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaRobot } from "react-icons/fa";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await API.post("/auth/register", {
        username,
        email,
        password,
      });

      toast.success("Registration Successful");
      navigate("/login");
    } catch (err) {
      console.log(err);

      if (err.response?.data?.detail) {
        toast.error(err.response.data.detail);
      } else {
        toast.error("Registration Failed");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-700 via-blue-700 to-indigo-900 p-6">
      <div className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">

        <div className="flex justify-center mb-6">
          <div className="bg-white text-blue-700 p-5 rounded-full shadow-xl">
            <FaRobot size={42} />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-center text-blue-100 mt-2 mb-8">
          Join VisionAssistAI
        </p>

        <form onSubmit={register} className="space-y-5">

          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 rounded-xl border outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl border outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl border outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition"
          >
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

        <p className="text-center text-white mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300 font-bold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;