import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaRobot } from "react-icons/fa";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
  e.preventDefault();

  console.log({
    email,
    password,
  });

  setLoading(true);

  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    console.log(res.data);

    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("email", email);

    toast.success("Login Successful");
    navigate("/dashboard");
  } catch (err) {
    console.log(err.response?.data);
    toast.error(err.response?.data?.detail || "Login Failed");
  }

  setLoading(false);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-6">

      <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="flex justify-center mb-6">
          <div className="bg-white p-5 rounded-full shadow-xl text-blue-700">
            <FaRobot size={45}/>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-blue-100 mt-2 mb-8">
          Login to VisionAssistAI
        </p>

        <form onSubmit={login} className="space-y-5">

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-500"/>
            <input
              type="email"
              placeholder="Email Address"
              className="pl-12"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500"/>
            <input
              type="password"
              placeholder="Password"
              className="pl-12"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <p className="text-center text-white mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-yellow-300"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;