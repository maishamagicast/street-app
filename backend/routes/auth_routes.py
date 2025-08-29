from flask import Blueprint, request, jsonify
from models.user_model import User
from extensions import db
import jwt
import datetime
import os

auth_bp = Blueprint("auth", __name__)

SECRET_KEY = os.environ.get("SECRET_KEY", "supersecretkey")

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"message": "Email already exists"}), 400
    user = User(username=data["username"], email=data["email"])
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"user": user.to_dict(), "message": "Signup successful"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(email=data["email"]).first()
    if not user or not user.check_password(data["password"]):
        return jsonify({"message": "Invalid credentials"}), 401

    token = jwt.encode(
        {"user_id": user.id, "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7)},
        SECRET_KEY,
        algorithm="HS256",
    )
    return jsonify({"user": user.to_dict(), "access_token": token})
