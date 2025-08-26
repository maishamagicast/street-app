from models.ngo_model import NGO
from extensions import db

def get_ngos():
    """Fetch all NGOs with structured data."""
    ngos = NGO.query.all()
    return [ngo.to_dict() for ngo in ngos]

def get_ngo_by_id(ngo_id):
    """Fetch a single NGO by ID."""
    ngo = NGO.query.get(ngo_id)
    if not ngo:
        return None, "NGO not found"
    return ngo.to_dict(), None

def create_ngo(data):
    """Validate and create a new NGO entry."""
    required_fields = ["name", "email"]
    for field in required_fields:
        if not data.get(field):
            return None, f"Missing required field: {field}"

    if NGO.query.filter_by(email=data["email"]).first():
        return None, "NGO with this email already exists"

    ngo = NGO(
        name=data["name"],
        email=data["email"],
        phone=data.get("phone"),
        address=data.get("address"),
    )

    try:
        db.session.add(ngo)
        db.session.commit()
        return ngo.to_dict(), None
    except Exception as e:
        db.session.rollback()
        return None, str(e)

def delete_ngo(ngo_id):
    """Delete an NGO entry."""
    ngo = NGO.query.get(ngo_id)
    if not ngo:
        return None, "NGO not found"

    try:
        db.session.delete(ngo)
        db.session.commit()
        return {"message": "NGO deleted successfully"}, None
    except Exception as e:
        db.session.rollback()
        return None, str(e)
