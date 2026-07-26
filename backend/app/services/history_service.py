from sqlalchemy.orm import Session
from app.models.history import History


def create_history(db: Session, user_id: int, feature: str, filename: str, result: str):
    history = History(
        user_id=user_id,
        feature=feature,
        filename=filename,
        result=result,
    )

    db.add(history)
    db.commit()
    db.refresh(history)

    return history


def get_history(db: Session, user_id: int):
    return (
        db.query(History)
        .filter(History.user_id == user_id)
        .order_by(History.created_at.desc())
        .all()
    )


def delete_history(db: Session, history_id: int):
    item = db.query(History).filter(History.id == history_id).first()

    if item:
        db.delete(item)
        db.commit()