from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import bcrypt
from extensions import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.LargeBinary(60), nullable=False)  # bcrypt hash is bytes
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    reports = db.relationship("Report", backref="user", lazy=True)

    def set_password(self, password: str):
        """Hash password with bcrypt and store it."""
        self.password_hash = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    def check_password(self, password: str) -> bool:
        """Check password against stored hash."""
        return bcrypt.checkpw(password.encode("utf-8"), self.password_hash)

    def to_dict(self):
        """Return public user info (without password)"""
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "created_at": self.created_at.isoformat(),
        }
