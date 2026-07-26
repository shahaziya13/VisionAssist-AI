import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import API from "../services/api";
import {
  FaCloudUploadAlt,
  FaFileAlt,
  FaCopy,
  FaTrash,
  FaDownload,
} from "react-icons/fa";

function OCR() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const extractText = async () => {
    if (!file) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await API.post("/ocr/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const extractedText = res.data.text || "";

      setText(extractedText);

      // Save OCR History
      const email = localStorage.getItem("email");

      const historyKey = `visionHistory_${email}`;

      const oldHistory =
        JSON.parse(localStorage.getItem(historyKey)) || [];

      oldHistory.push({
        type: "OCR",
        filename: file.name,
        result:
          extractedText.length > 150
            ? extractedText.substring(0, 150) + "..."
            : extractedText || "No text extracted",
        date: new Date().toLocaleString(),
      });

      localStorage.setItem(
        historyKey,
        JSON.stringify(oldHistory)
      );

      toast.success("Text Extracted Successfully");
    } catch (err) {
      console.log(err);
      toast.error("OCR Failed");
    }

    setLoading(false);
  };

  const copyText = () => {
    if (!text) {
      toast.error("No text to copy");
      return;
    }

    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard");
  };

  const downloadText = () => {
    if (!text) {
      toast.error("No text to download");
      return;
    }

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ocr-result.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setFile(null);
    setPreview("");
    setText("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-blue-100 p-8">

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-extrabold text-center text-indigo-700">
            OCR Text Extraction
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Upload an image and extract text using AI OCR.
          </p>

          <label className="border-2 border-dashed border-indigo-400 rounded-3xl p-10 flex flex-col items-center cursor-pointer hover:bg-indigo-50 transition">

            <FaCloudUploadAlt
              size={70}
              className="text-indigo-600 mb-4"
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
            <div className="flex justify-center mt-8">
              <img
                src={preview}
                alt="preview"
                className="rounded-2xl shadow-xl max-h-[420px]"
              />
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <button
              onClick={extractText}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:scale-105 transition"
            >
              <FaFileAlt />
              Extract Text
            </button>

            <button
              onClick={copyText}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              <FaCopy />
              Copy
            </button>

            <button
              onClick={downloadText}
              className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition"
            >
              <FaDownload />
              Download
            </button>

            <button
              onClick={clearAll}
              className="flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition"
            >
              <FaTrash />
              Clear
            </button>

          </div>

          {loading && <Loading />}

          {text && (
            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                Extracted Text
              </h2>

              <textarea
                value={text}
                readOnly
                rows={12}
                className="w-full p-5 rounded-2xl border border-gray-300 bg-gray-50"
              />

            </div>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default OCR;