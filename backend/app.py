from urllib import response

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

API_KEY = os.environ.get("OPENWEATHER_API_KEY")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/weather")
def get_weather():

    city = request.args.get("city")

    if not city:
        return jsonify({"error": "City name is required"}), 400

    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(url, params=params)
    if response.status_code != 200:
        return jsonify({
        "error": response.json().get("message", "Unable to fetch weather")
    }), response.status_code

if __name__ == "__main__":
    app.run(debug=True)