from fastapi import APIRouter, UploadFile, File
from ocr_model import extract_text
from voice import speak
import shutil
import os


router = APIRouter()


@router.post("/ocr")
async def read_text(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    image_path = "uploads/" + file.filename

    # Save uploaded image
    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)


    # Extract text
    text = extract_text(image_path)


    # Speak extracted text
    if text:
        speak(text)
    else:
        speak("No text detected")


    return {
        "text": text
    }