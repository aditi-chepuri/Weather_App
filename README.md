# 🌤️ Weather App

A responsive web-based Weather Application that provides real-time weather information for any city using the OpenWeatherMap API.

The application is built using **HTML, CSS, JavaScript, Python Flask, and OpenWeatherMap API**. The Flask backend securely handles the API request, while the frontend displays the weather information in a simple and responsive interface.

## 🚀 Live Demo

**Live Application:**
https://weather-app-994s.onrender.com/

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Displays current temperature
* ☁️ Displays weather condition
* 💧 Displays humidity
* 💨 Displays wind speed
* 🤗 Displays feels-like temperature
* 🌤️ Dynamic weather icons
* 🎨 Dynamic background based on weather condition
* ⌨️ Search using the Enter key
* ⏳ Loading status while fetching data
* ❌ Error handling for invalid city names
* 📱 Responsive design for different screen sizes
* 🔐 API key handled securely through backend environment variables

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask
* Flask-CORS

### API

* OpenWeatherMap API

### Deployment

* Render

### Version Control

* Git
* GitHub

## 🔄 How It Works

```text
User enters city
       ↓
JavaScript sends request
       ↓
Flask Backend
       ↓
OpenWeatherMap API
       ↓
Weather data returned
       ↓
JavaScript processes data
       ↓
Weather information displayed
```

## 📂 Project Structure

```text
Weather_App/
│
├── .gitignore
├── README.md
│
└── backend/
    ├── app.py
    ├── requirements.txt
    │
    ├── templates/
    │   └── index.html
    │
    └── static/
        ├── style.css
        └── script.js
```

## 🔑 API Integration

The application uses the **OpenWeatherMap API** to retrieve real-time weather information.

The city entered by the user is sent to the Flask backend. The backend communicates with OpenWeatherMap and returns the weather data to the frontend.

The API key is stored as an environment variable instead of being exposed in the frontend source code.

```text
OPENWEATHER_API_KEY
```

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/aditi-chepuri/Weather_App.git
```

### 2. Open the project

```bash
cd Weather_App
```

### 3. Go to the backend folder

```bash
cd backend
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Set the API key

On Windows PowerShell:

```powershell
$env:OPENWEATHER_API_KEY="YOUR_API_KEY"
```

Replace `YOUR_API_KEY` with your own OpenWeatherMap API key.

### 6. Start the application

```bash
python app.py
```

### 7. Open in browser

```text
http://127.0.0.1:5000
```

## 🌍 Example

Search for:

```text
Hyderabad
```

The application displays:

* City and country
* Current temperature
* Weather condition
* Humidity
* Wind speed
* Feels-like temperature
* Weather icon
* Current date and time

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## 🔮 Future Enhancements

* 5-day weather forecast
* Geolocation-based weather
* Weather history
* Sunrise and sunset information
* Multiple location comparison
* Weather alerts
* Dark mode

## 👩‍💻 Author

**Aditi Chepuri**

GitHub:
https://github.com/aditi-chepuri

---

⭐ If you find this project useful, consider giving the repository a star!
