from app import db

class Robot(db.Model):
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String)
  function = db.Column(db.String)