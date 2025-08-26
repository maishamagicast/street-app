import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import MAIL_USERNAME, MAIL_PASSWORD

def send_email(recipient, subject, body):
    msg = MIMEMultipart()
    msg["From"] = MAIL_USERNAME
    msg["To"] = recipient
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(MAIL_USERNAME, MAIL_PASSWORD)
            server.sendmail(MAIL_USERNAME, recipient, msg.as_string())
        print("Email sent!")
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

