import json
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, origins=["localhost:4200"])
app.config['CORS_HEADERS'] = 'Content-Type'

# localhost:5000

@app.route('/')
def index():
    return jsonify({'test': 'works'})

@app.route('/movies', methods=['GET'])
def getMovieNames():
    with open('movies.txt', 'r') as f:
        return jsonify(json.loads(f.read())) # makes all the data from data.txt into json format

@app.route('/movie', methods=['GET'])
def getMovie():
    final = ""
    id = int(request.args.get('id'))
    with open('movies.txt', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for record in records:
            if record['id'] == id:
                final = jsonify(record)
                break
        # final.headers.add('Access-Control-Allow-Origin', '*')
        return final

@app.route('/posts', methods=['GET'])
def getPosts():
    final = ""
    posts = int(request.args.get('page'))
    howMany = int(request.args.get('howMany'))
    with open('posts.txt', 'r') as f:
        data = f.read()
        records = json.loads(data)
        array = []
        index = 0
        for record in records:
            if index >= posts * howMany - howMany:
                array.append(record)
            elif index > posts * howMany:
                break
            
            index += 1
        final = jsonify(array)
        final.headers.add("Access-Control-Allow-Origin", "*")
        final.headers.add("Access-Control-Allow-Headers", "*")
        final.headers.add("Access-Control-Allow-Methods", "*")
        return final
        

@app.route('/login', methods=['GET'])
def getUserData():
    user = request.args.get('user')
    password = request.args.get('password')
    with open('users.txt', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for record in records:
            if record['user'] == user:
                if record['password'] == password:
                    return jsonify({"response": True})
                else:
                    return jsonify({"response": False})
        return jsonify({"response": False})

app.run()
