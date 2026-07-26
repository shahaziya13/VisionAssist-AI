from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.core.config import get_settings
from app.core.database import create_tables

from app.api.auth import router as auth_router
from app.api.detect import router as detect_router
from app.api.ocr import router as ocr_router
from app.api.history import router as history_router

settings = get_settings()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0"
)

create_tables()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.include_router(auth_router)
app.include_router(detect_router)
app.include_router(ocr_router)
app.include_router(history_router)


@app.get("/")
def root():
    return {
        "message": "VisionAssist AI Backend Running",
        "status": "success"
    }


@app.get("/health")
def health_check():
    return {
        "server": "running",
        "project": settings.PROJECT_NAME
    }