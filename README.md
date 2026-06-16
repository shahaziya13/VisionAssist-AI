\# 👁 VisionAssist AI



\## AI-Powered Accessibility Assistant for Visually Impaired Users



VisionAssist AI is an intelligent assistive application that uses Artificial Intelligence and Computer Vision to help visually impaired users understand their surroundings.



The system can detect objects, extract text from images, and provide voice-based feedback.



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

