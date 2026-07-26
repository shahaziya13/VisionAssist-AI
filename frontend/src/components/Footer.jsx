import {
  FaGithub,
  FaLinkedin,
  FaRobot,
  FaBrain,
  FaCode,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="bg-blue-600 p-3 rounded-full">
                <FaRobot size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  VisionAssistAI
                </h2>

                <p className="text-gray-400 text-sm">
                  AI Powered Vision Platform
                </p>
              </div>

            </div>

            <p className="text-gray-300 leading-7">
              VisionAssistAI combines Object Detection and OCR to help users
              identify objects and extract text from images with a clean,
              modern AI experience.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Technologies
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <FaBrain className="text-blue-400" />
                YOLOv8 Object Detection
              </div>

              <div className="flex items-center gap-3">
                <FaBrain className="text-green-400" />
                Tesseract OCR
              </div>

              <div className="flex items-center gap-3">
                <FaCode className="text-purple-400" />
                React + FastAPI + PostgreSQL
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="bg-white/10 hover:bg-blue-600 transition-all p-4 rounded-full"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="bg-white/10 hover:bg-blue-500 transition-all p-4 rounded-full"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 VisionAssistAI. All Rights Reserved.
          </p>

          <p className="text-blue-300 mt-3 md:mt-0">
            Built with ❤️ using React, FastAPI & AI
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;