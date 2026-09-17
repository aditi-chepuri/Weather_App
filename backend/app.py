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

    if not API_KEY:
        return jsonify({"error": "OpenWeather API key is missing on server"}), 500

    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    }

    response = requests.get(url, params=params)

    print("OpenWeather status:", response.status_code)
    print("OpenWeather response:", response.text)

    if response.status_code != 200:
        try:
            error_data = response.json()
            return jsonify({
                "error": error_data.get("message", "Weather API error")
            }), response.status_code
        except Exception:
            return jsonify({
                "error": "Weather API error"
            }), response.status_code

    return jsonify(response.json())


if __name__ == "__main__":
    app.run(debug=True)