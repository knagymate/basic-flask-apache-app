import os

from app import app, db

with app.app_context():
    if os.path.exists("db/project.db"):
        os.remove("db/project.db")
    db.create_all()
    os.chmod("db/project.db", 0o0777)
