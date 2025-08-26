from config import db

class Report(db.Model):
    __tablename__='reports'
    
    id = db.Column(db.Integer, primary_key=True)
    ngo_id=db.Column(db.Integer,db.ForeignKey('ngos.id'),nullable=True)
    
    child_name=db.Column(db.String(120),nullable=False)
    child_age=db.Column(db.Integer,nullable=True)
    child_gender=db.Column(db.String(20),nullable=True)
    
    case_type=db.Column(db.String(100),nullable=False)
    description=db.Coolumn(db.Text,nullable=True)
    location=db.Column(db.String(300),nullable=True)
    
    reported_at=db.Column(db.DateTime,server_default=db.func.now())
    