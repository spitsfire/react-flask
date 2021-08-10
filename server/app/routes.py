from flask import Blueprint, request, jsonify, make_response
from app import db
from app.models.robot import Robot

robot_bp = Blueprint('robot_bp', __name__, url_prefix='/robots')

@robot_bp.route('', methods=['GET'])
def index():
  robots = Robot.query.all()
  robots_response = []
  for robot in robots:
    robots_response.append({
      "id": robot.id,
      "name": robot.name,
      "function": robot.function
    })


  return jsonify(robots_response), 200

@robot_bp.route('', methods=['POST'])
def create():
  response_data = request.get_json()

  robot = Robot(
    name=response_data['name'],
    function=response_data['func']
  )

  db.session.add(robot)
  db.session.commit()

  robot_response = {
    "id": robot.id, 
    "name": robot.name, 
    "function": robot.function
    }

  return jsonify(robot_response), 200