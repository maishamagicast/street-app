from flask import Blueprint, request, jsonify
from controllers.report_controller import get_reports, create_report

report_bp = Blueprint("report_bp", __name__, url_prefix="/reports")

@report_bp.get("/")
def list_reports():
    reports = get_reports()
    return jsonify(reports), 200

@report_bp.post("/")
def add_report():
    data = request.get_json()
    report = create_report(data)
    return jsonify(report), 201

