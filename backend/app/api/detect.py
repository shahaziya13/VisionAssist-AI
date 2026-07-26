from fastapi import APIRouter, UploadFile, File
from fastapi.staticfiles import StaticFiles
from app.services.detect_service import detect_objects
import shutil
import os
import uuid

router = APIRouter(
    prefix="/detect",
    tags=["Object Detection"]
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/")
async def detect(file: UploadFile = File(...)):

    filename = f"{uuid.uuid4()}_{file.filename}"

    filepath = os.path.join(
        UPLOAD_DIR,
        filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    detections, output_image = detect_objects(filepath)

    return {
        "detections": detections,
        "image": f"/results/{filename}"
    }