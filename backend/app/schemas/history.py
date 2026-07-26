from pydantic import BaseModel
from datetime import datetime


class HistoryResponse(BaseModel):
    id: int
    feature: str
    filename: str
    result: str
    created_at: datetime

    class Config:
        from_attributes = True