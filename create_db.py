import os

from app import app, db

with app.app_context():
    os.remove("instance/project.db")
    db.create_all()
