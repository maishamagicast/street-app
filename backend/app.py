from config import create_app, db
from routes.ngo_routes import ngo_bp
from routes.report_routes import report_bp
from models import ngo_model, report_model  

app = create_app()


app.register_blueprint(ngo_bp, url_prefix="/ngos")
app.register_blueprint(report_bp, url_prefix="/reports")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()   
    app.run(debug=True)
