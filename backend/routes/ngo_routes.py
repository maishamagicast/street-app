from flask import Blueprint, request, jsonify
from controllers.ngo_controller import get_ngos, create_ngo

ngo_bp = Blueprint("ngo_bp", __name__, url_prefix="/ngos")

@ngo_bp.get("/")
def list_ngos():
    ngos = get_ngos()
    return jsonify(ngos), 200

@ngo_bp.post("/")
def add_ngo():
    data = request.get_json()
    ngo = create_ngo(data)
    return jsonify(ngo), 201
