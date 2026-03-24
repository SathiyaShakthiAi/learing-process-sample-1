from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/')
def home():
    return {"message": "Backend server is running!"}

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.json
    print(f"Data received: {data}")
    return jsonify({"message": "Form submitted successfully!"}), 200

if __name__ == '__main__':
    # '0.0.0.0' for accessibility for all
    app.run(debug=True, host='0.0.0.0', port=5000)
