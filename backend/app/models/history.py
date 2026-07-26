from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.core.database import Base


class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    feature = Column(String, nullable=False)

    filename = Column(String, nullable=False)

    result = Column(String, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())