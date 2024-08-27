#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jul 30 21:09:21 2024

@author: jonathantavarez
"""

from flask import request, Flask, jsonify
from airunplan import aiplan
from flask_cors import CORS
from runmlmodel import ml_pace_pred
import os
app = Flask(__name__)
cors = CORS(app)


@app.route("/test", methods=["GET"])
def test():
    
   
    response = "hello"
    response = {"test": response}
    return jsonify(response), 200

@app.route("/newpace", methods = ["GET"])
def new_pace():
    weight = request.args['weight']
    gender = request.args['gender']
    pace = request.args['pace']
    if gender == 'Male':
        avg_weight = 180
    else:
        avg_weight = 150
    weight = int(weight)
    pace = int(round((float(pace))*60))
    weight_diff= weight-avg_weight
    adj_pace = pace * (1 + (weight_diff/10) * .05)
    adj_pace = round(adj_pace/60,2)
    response = {"newpace": adj_pace}
    return jsonify(response), 200

@app.route("/ai", methods=["GET"])
def ai():
    distance = request.args['distance']
    duration = request.args['duration']
    response = aiplan(distance, duration)
    response = {"runplan": response}
    return jsonify(response), 200
#http://127.0.0.1:5000/ai?duration=2&distance=3

@app.route("/mlresp", methods=["GET"])
def mlresp():
    gender = request.args['gender']
    age = request.args['age']
    distance = request.args['distance']
    number = 60 * float(distance)
    pace = round(ml_pace_pred(age, gender, distance)/number,2)
    response = {"mlpace": pace}
    return jsonify(response), 200
#http://127.0.0.1:5000/mlresp?gender=2&age=3

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
