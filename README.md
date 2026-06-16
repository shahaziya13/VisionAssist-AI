\# 👁 VisionAssist AI
## AI-Powered Image Detection and Analysis Platform

VisionAssist AI is an intelligent computer vision application that analyzes images using Artificial Intelligence. The system can detect objects, extract text from images, and provide meaningful information from visual content.

The project combines deep learning and image processing techniques to create an automated image understanding system.

---

# 🚀 Features

## 👁 Object Detection

- Detects multiple objects present in an image.

- Uses a YOLO deep learning model for real-time object recognition.

- Provides information about detected objects.

Example:

Input:

\---



\# 🚀 Features



\## 👁 Object Detection

\- Detects objects using YOLO deep learning model.

\- Helps users identify surrounding objects.



\## 📄 Text Reading

\- Extracts text from images using OCR.

\- Converts captured text into readable information.



\## 📷 Camera Assistance

\- Supports live camera capture.

\- Allows users to analyze their surroundings.



\## 🔊 Voice Feedback

\- Converts AI results into speech.

\- Provides an accessible user experience.



\---



\# 🏗 System Architecture

User

|

| Camera / Upload Image

|

React Frontend

|

FastAPI Backend

|



| |

YOLO Model OCR Engine

| |

Object Data Extracted Text

|

Voice Feedback





\---



\# 🛠 Technologies Used



\### Frontend

\- React.js

\- Vite

\- JavaScript

\- CSS



\### Backend

\- Python

\- FastAPI

\- Uvicorn



\### AI Technologies

\- YOLO Object Detection

\- Tesseract OCR

\- Computer Vision



\---



\# 📂 Project Structure



VisionAssistAI



├── frontend

│ ├── src

│ │ ├── Home.jsx

│ │ ├── App.jsx

│ │ └── pages

│ │ └── Detection.jsx

│

└── backend

├── main.py

├── routes

├── models

└── ocr\_model.py





\---



\# ⚙ Installation



\## Backend Setup

cd backend



python -m venv venv



venv\\Scripts\\activate



pip install -r requirements.txt



uvicorn main:app --reload





Backend runs at:





http://127.0.0.1:8000





\---



\## Frontend Setup





cd frontend



npm install



npm run dev





Frontend runs at:





http://localhost:5173





\---



\# 🎯 Future Improvements



\- Real-time object detection using webcam

\- Mobile application

\- Navigation assistance

\- Voice command support

\- Edge AI deployment



\---



\# 👩‍💻 Developed For



Hackathon Project



\*\*VisionAssist AI\*\*

