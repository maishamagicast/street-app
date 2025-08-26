import os
from dotenv import load_dotenv
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
# from models import ngo_model, report_model

load_dotenv()
db = SQLAlchemy()

def create_app():
    app=Flask(__name__)
    CORS(app)
    
    
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")  
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    db.init_app(app)
    # mail.init_app(app)  
    migrate = Migrate(app, db)
    
    return app
