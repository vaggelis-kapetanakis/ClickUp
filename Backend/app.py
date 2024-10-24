from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, resources={
    r"/user": {
        "origins": ["http://localhost:5173"]
    }
})

@app.route('/user')
def get_random_user():
    gender = request.args.get('gender')
    
    base_url = "https://randomuser.me/api/"
    if gender in ['male', 'female']:
        url = f"{base_url}?gender={gender}"
    else:
        url = base_url
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        user_data = response.json()['results'][0]
        
        return jsonify(user_data)
    
    except requests.RequestException as e:
        return jsonify({
            "error": "Failed to fetch random user",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)