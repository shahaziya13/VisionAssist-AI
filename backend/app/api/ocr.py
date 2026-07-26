from fastapi import APIRouter, UploadFile, File
from app.services.ocr_service import extract_text
import shutil
import uuid
import os

router = APIRouter(
    prefix="/ocr",
    tags=["OCR"]
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/")
async def ocr(file: UploadFile = File(...)):

    filename = f"{uuid.uuid4()}_{file.filename}"
    filepath = os.path.join(UPLOAD_DIR, filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(filepath)

    return {
        "text": text
    }