import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 to-purple-700 text-white">

        <h1 className="text-6xl font-bold">
          VisionAssistAI
        </h1>

        <p className="mt-5 text-xl">
          AI Powered Object Detection & OCR
        </p>

        <div className="mt-10 flex gap-5">

          <Link to="/login">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-black text-white px-8 py-3 rounded-xl">
              Register
            </button>
          </Link>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;