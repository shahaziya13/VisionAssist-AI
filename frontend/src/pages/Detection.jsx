import { useState, useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import {
  Eye,
  FileText,
  Camera,
  Volume2,
  Upload
} from "lucide-react";

import "../App.css";


function Detection() {


  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);


  const webcamRef = useRef(null);





  // Upload Image

  const handleImage = (event) => {


    const file = event.target.files[0];


    if(file){

      setImage(file);

      setPreview(
        URL.createObjectURL(file)
      );

    }

  };







  // Capture Image

  const captureImage = async () => {


    const imageSrc =
      webcamRef.current.getScreenshot();



    if(!imageSrc){

      alert("Camera capture failed");

      return;

    }



    setPreview(imageSrc);



    const response =
      await fetch(imageSrc);



    const blob =
      await response.blob();



    const file = new File(

      [blob],

      "camera-image.jpg",

      {
        type:"image/jpeg"
      }

    );



    setImage(file);



    alert("Image captured successfully");


  };







  // Object Detection

  const detectObjects = async () => {


    if(!image){

      alert("Upload or capture image first");

      return;

    }



    setLoading(true);



    const formData =
      new FormData();



    formData.append(

      "file",

      image

    );



    try{


      const response =
        await axios.post(

          "http://127.0.0.1:8000/detect",

          formData

        );



      setResult(

        JSON.stringify(

          response.data,

          null,

          2

        )

      );


    }

    catch(error){


      setResult(

        "Detection Error: " + error.message

      );


    }



    setLoading(false);


  };








  // OCR

  const readText = async () => {


    if(!image){

      alert("Upload or capture image first");

      return;

    }



    setLoading(true);



    const formData =
      new FormData();



    formData.append(

      "file",

      image

    );




    try{


      const response =
        await axios.post(

          "http://127.0.0.1:8000/ocr",

          formData

        );



      setResult(

        response.data.text

      );


    }

    catch(error){


      setResult(

        "OCR Error: " + error.message

      );


    }



    setLoading(false);


  };







  // Voice Output

  const speakResult = () => {


    if(!result){

      alert("No result available");

      return;

    }



    const speech =
      new SpeechSynthesisUtterance(

        result

      );



    window.speechSynthesis.speak(

      speech

    );


  };








  return (

    <div className="home">


      <nav>

        <h2>

          👁 VisionAssist AI

        </h2>

      </nav>







      <section className="hero">


        <h1>

          AI Detection Assistant

        </h1>


        <p>

          Upload or capture an image
          to detect objects and read text.

        </p>



      </section>








      {/* Camera */}


      <Webcam

        ref={webcamRef}

        screenshotFormat="image/jpeg"

        className="preview"

      />



      <br/>



      <button onClick={captureImage}>


        <Camera/>

        Capture Image


      </button>








      {/* Upload */}



      <label className="upload">


        <Upload/>


        Upload Image



        <input

          type="file"

          accept="image/*"

          onChange={handleImage}

        />


      </label>









      {/* Preview */}


      {

        preview &&


        <img

          src={preview}

          alt="preview"

          className="preview"

        />

      }








      {/* Buttons */}



      <div>


        <button onClick={detectObjects}>


          <Eye/>

          Detect Objects


        </button>





        <button onClick={readText}>


          <FileText/>

          Read Text


        </button>






        <button onClick={speakResult}>


          <Volume2/>

          Speak Result


        </button>



      </div>








      {/* Result */}



      <div className="result">


        <h2>

          Result

        </h2>




        {

          loading

          ?

          <p>

            Processing...

          </p>


          :

          <pre>

            {result}

          </pre>


        }


      </div>





    </div>

  );

}



export default Detection;