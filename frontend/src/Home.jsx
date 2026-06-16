import { Eye, FileText, Camera, Volume2 } from "lucide-react";
import "./App.css";


function Home() {


  return (

    <div className="home">


      {/* Navbar */}

      <nav>

        <h2>
          👁 VisionAssist AI
        </h2>

      </nav>





      {/* Hero Section */}

      <section className="hero">


        <h1>

          See the world with

          <span> AI assistance</span>

        </h1>



        <p>

          VisionAssist AI is an intelligent accessibility
          assistant that helps visually impaired users
          understand their surroundings using Artificial
          Intelligence.

        </p>




        <button
          onClick={() => window.location.href="/detect"}
        >

          Start Detection

        </button>



      </section>






      {/* Features Section */}

      <section className="features">


        <h2>
          Features
        </h2>




        <div className="cards">



          <div className="card">

            <Eye size={40}/>

            <h3>
              Object Detection
            </h3>

            <p>
              Detect objects around the user using
              AI-powered computer vision.
            </p>

          </div>






          <div className="card">

            <FileText size={40}/>

            <h3>
              Text Reading
            </h3>

            <p>
              Extract and read text from images
              using OCR technology.
            </p>

          </div>







          <div className="card">

            <Camera size={40}/>

            <h3>
              Camera Assistance
            </h3>

            <p>
              Capture surroundings through a live
              camera interface.
            </p>

          </div>







          <div className="card">

            <Volume2 size={40}/>

            <h3>
              Voice Feedback
            </h3>

            <p>
              Converts AI results into speech for
              better accessibility.
            </p>

          </div>




        </div>



      </section>







      {/* Technology Section */}

      <section className="tech">


        <h2>
          Built With
        </h2>


        <p>
          React.js • FastAPI • YOLO • Tesseract OCR • Python
        </p>



      </section>






    </div>

  );

}


export default Home;