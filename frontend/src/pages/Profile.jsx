import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const email = localStorage.getItem("email");

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-center mb-8">
            My Profile
          </h1>

          <div className="space-y-5">

            <div>
              <label className="font-bold">Email</label>
              <input
                value={email || ""}
                readOnly
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            <div>
              <label className="font-bold">Application</label>
              <input
                value="VisionAssistAI"
                readOnly
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            <div>
              <label className="font-bold">Technology</label>
              <input
                value="React + FastAPI + PostgreSQL + YOLOv8 + OCR"
                readOnly
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;