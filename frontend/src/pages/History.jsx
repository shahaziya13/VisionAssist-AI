import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHistory, FaTrash, FaRobot, FaFileAlt } from "react-icons/fa";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
  const email = localStorage.getItem("email");

  const historyKey = `visionHistory_${email}`;

  const data =
    JSON.parse(localStorage.getItem(historyKey)) || [];

  setHistory(data.reverse());
}, []);
  const clearHistory = () => {
    const email = localStorage.getItem("email");
    localStorage.removeItem(`visionHistory_${email}`);
    setHistory([]);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <div className="flex justify-between items-center mb-10">

            <div className="flex items-center gap-4">
              <FaHistory className="text-blue-600" size={35} />
              <div>
                <h1 className="text-4xl font-bold">History</h1>
                <p className="text-gray-500">
                  View all Object Detection and OCR activities
                </p>
              </div>
            </div>

            <button
              onClick={clearHistory}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <FaTrash />
              Clear History
            </button>

          </div>

          {history.length === 0 ? (
            <div className="text-center py-24">

              <FaRobot
                size={90}
                className="mx-auto text-blue-500 mb-6"
              />

              <h2 className="text-3xl font-bold">
                No History Available
              </h2>

              <p className="text-gray-500 mt-3">
                Perform Object Detection or OCR to see your activity here.
              </p>

            </div>
          ) : (

            <div className="space-y-6">

              {history.map((item, index) => (

                <div
                  key={index}
                  className="bg-white border-l-8 border-blue-600 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                >

                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <div className="bg-blue-100 p-3 rounded-full">
                        <FaFileAlt
                          className="text-blue-700"
                          size={20}
                        />
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-blue-700">
                          {item.type}
                        </h2>

                        <p className="text-gray-500">
                          {item.date}
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="mt-5 space-y-2">

                    <p>
                      <span className="font-bold">
                        File:
                      </span>{" "}
                      {item.filename}
                    </p>

                    <p>
                      <span className="font-bold">
                        Result:
                      </span>{" "}
                      {item.result}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default History;