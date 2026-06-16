from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import detection, ocr


app = FastAPI()


# Enable frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(detection.router)
app.include_router(ocr.router)