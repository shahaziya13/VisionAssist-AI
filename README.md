# VisionAssistAI

VisionAssistAI is an AI-powered web application that performs real-time Object Detection and OCR (Optical Character Recognition).

## Features

- User Registration & Login (JWT Authentication)
- Object Detection using YOLOv8
- OCR Text Extraction using Tesseract
- Detection & OCR History
- Modern Responsive Dashboard
- PostgreSQL Database

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- YOLOv8
- OpenCV
- Tesseract OCR

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Author

Ayshath Shahaziya