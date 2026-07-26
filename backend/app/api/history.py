from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.history_service import get_history

router = APIRouter(
    prefix="/history",
    tags=["History"],
)


@router.get("/")
def history(
    db: Session = Depends(get_db),
):
    return get_history(db, 1)