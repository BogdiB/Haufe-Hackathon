import json
from flask import Flask, jsonify, request

app = Flask(__name__)

# localhost:5000

@app.route('/')
def index():
    return jsonify({'test': 'works'})

@app.route('/movies', methods=['GET'])
def getMovies():
    with open('/movies.txt', 'r') as f:
        return jsonify(json.loads(f.read())) # makes all the data from data.txt into json format

app.run()