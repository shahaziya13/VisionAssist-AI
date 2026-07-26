import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import API from "../services/api";
import {
  FaCloudUploadAlt,
  FaSearch,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

function ObjectDetection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const detect = async () => {
  if (!file) {
    toast.error("Select an image first");
    return;
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await API.post("/detect/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const detections = res.data.detections || [];

    setResult(detections);

    // Save to Local History
    const email = localStorage.getItem("email");

const historyKey = `visionHistory_${email}`;

const oldHistory =
  JSON.parse(localStorage.getItem(historyKey)) || [];

oldHistory.push({
  type: "Object Detection",
  filename: file.name,
  result:
    detections.length > 0
      ? detections
          .map(
            (d) =>
              `${d.object} (${(d.confidence * 100).toFixed(1)}%)`
          )
          .join(", ")
      : "No objects detected",
  date: new Date().toLocaleString(),
});

localStorage.setItem(
  historyKey,
  JSON.stringify(oldHistory)
);

    toast.success("Detection Completed");
  } catch (err) {
    console.log(err);
    toast.error("Detection Failed");
  }

  setLoading(false);
};

  const clearAll = () => {
    setFile(null);
    setPreview("");
    setResult([]);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <h1 className="text-4xl font-extrabold text-center text-blue-700">
              AI Object Detection
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Upload an image and let YOLOv8 detect objects.
            </p>

            <label className="border-2 border-dashed border-blue-400 rounded-3xl p-10 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition">

              <FaCloudUploadAlt
                size={70}
                className="text-blue-600 mb-4"
              />

              <p className="font-semibold text-lg">
                Click to Upload Image
              </p>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const img = e.target.files[0];
                  setFile(img);

                  if (img) {
                    setPreview(URL.createObjectURL(img));
                  }
                }}
              />
            </label>

            {preview && (
              <div className="mt-8 flex justify-center">
                <img
                  src={preview}
                  alt="preview"
                  className="rounded-2xl shadow-xl max-h-[420px]"
                />
              </div>
            )}

            <div className="flex justify-center gap-5 mt-8">

              <button
                onClick={detect}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition"
              >
                <FaSearch />
                Detect Objects
              </button>

              <button
                onClick={clearAll}
                className="flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition"
              >
                <FaTrash />
                Clear
              </button>

            </div>

            {loading && <Loading />}

            {result.length > 0 && (

              <div className="mt-10">

                <h2 className="text-3xl font-bold mb-6 text-center">
                  Detection Results
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  {result.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-xl"
                    >
                      <div className="flex justify-between items-center">

                        <div className="flex items-center gap-3">
                          <FaCheckCircle size={22} />
                          <h3 className="text-xl font-bold">
                            {item.object}
                          </h3>
                        </div>

                        <span className="font-bold">
                          {(item.confidence * 100).toFixed(1)}%
                        </span>

                      </div>
                    </div>
                  ))}

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ObjectDetection;