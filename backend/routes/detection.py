from fastapi import APIRouter, UploadFile, File
from yolo_model import detect_objects
from voice import speak
import shutil
import os


router = APIRouter()


@router.post("/detect")
async def detect(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    image_path = "uploads/" + file.filename

    # Save image
    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)


    # Detect objects
    result = detect_objects(image_path)


    # Convert detections into sentence
    if result:
        objects = []

        for item in result:
            objects.append(item["object"])

        message = ", ".join(objects) + " detected"

        # Speak result
        speak(message)

    else:
        speak("No objects detected")


    return {
        "detections": result,
        "voice_message": message if result else "No objects detected"
    }