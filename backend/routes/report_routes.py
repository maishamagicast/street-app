from flask import Blueprint, request, jsonify
from controllers.report_controller import get_reports, create_report, delete_report

report_bp = Blueprint("report_bp", __name__, url_prefix="/reports")

@report_bp.get("/")
def list_reports():
    reports = get_reports()
    return jsonify(reports), 200

@report_bp.post("/")
def add_report():
    data = request.get_json()
    report, error = create_report(data)
    if error:
        return jsonify({"error": error}), 400
    return jsonify(report), 201

@report_bp.delete("/<int:report_id>")
def remove_report(report_id):
    result, error = delete_report(report_id)
    if error:
        return jsonify({"error": error}), 404
    return jsonify(result), 200
