from models.report_model import Report
from models.ngo_model import NGO
from extensions import db
from utils.mailer import send_email  

def get_reports():
    """Fetch all reports in structured form."""
    reports = Report.query.all()
    return [r.to_dict() for r in reports]

def get_report_by_id(report_id):
    """Fetch a single report."""
    report = Report.query.get(report_id)
    if not report:
        return None, "Report not found"
    return report.to_dict(), None

def create_report(data):
    """Validate and create a report, notify NGOs if needed."""
    if not data.get("location") or not data.get("description"):
        return None, "Location and description are required"

    report = Report(
        location=data["location"],
        description=data["description"],
        reporter_name=data.get("reporter_name"),
        reporter_contact=data.get("reporter_contact"),
    )

    try:
        db.session.add(report)
        db.session.commit()

        ngos = NGO.query.all()
        for ngo in ngos:
            if ngo.email:  
                send_email(
                    subject="Street Child Report",
                    recipient=ngo.email,
                    body=f"""
                    A new report has been filed:
                    Location: {report.location}
                    Description: {report.description}
                    Reporter: {report.reporter_name or 'Anonymous'}
                    """
                )

        return report.to_dict(), None
    except Exception as e:
        db.session.rollback()
        return None, str(e)

def delete_report(report_id):
    """Delete a report if it exists."""
    report = Report.query.get(report_id)
    if not report:
        return None, "Report not found"

    try:
        db.session.delete(report)
        db.session.commit()
        return {"message": "Report deleted successfully"}, None
    except Exception as e:
        db.session.rollback()
        return None, str(e)
