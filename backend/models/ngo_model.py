from extensions import db

class NGO(db.Model):
    __tablename__='ngos'
    
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),nullable=False)
    description=db.Column(db.String(500),nullable=True)
    email=db.Column(db.String(100),nullable=False,unique=True)
    phone=db.Column(db.String(15),nullable=True)
    address=db.Column(db.String(200),nullable=True)
    website=db.Column(db.String(100),nullable=True)
    created_at=db.Column(db.DateTime,server_default=db.func.now())
    
    reports=db.relationship('Report',backref='ngo',lazy=True)