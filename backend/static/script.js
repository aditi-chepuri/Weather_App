

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const errorMessage = document.getElementById("errorMessage");

    // Check empty input
    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    // Clear previous error
    errorMessage.textContent = "";

    // Show loading status
    document.getElementById("cityName").textContent = "Loading...";
    document.getElementById("temperature").textContent = "--°C";
    document.getElementById("condition").textContent = "Fetching weather...";

    try {

        const response = await fetch(
    '/weather?city=${encodeURIComponent(city)}'
);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Get weather condition
        const weatherMain = data.weather[0].main.toLowerCase();

        // Change background according to weather
        const body = document.body;

        if (weatherMain === "clear") {

            body.style.background =
                "linear-gradient(135deg, #56ccf2, #f2c94c)";

        } else if (weatherMain === "clouds") {

            body.style.background =
                "linear-gradient(135deg, #bdc3c7, #2c3e50)";

        } else if (
            weatherMain === "rain" ||
            weatherMain === "drizzle"
        ) {

            body.style.background =
                "linear-gradient(135deg, #4b79a1, #283e51)";

        } else if (weatherMain === "snow") {

            body.style.background =
                "linear-gradient(135deg, #e6dada, #274046)";

        } else if (
            weatherMain === "mist" ||
            weatherMain === "fog" ||
            weatherMain === "haze"
        ) {

            body.style.background =
                "linear-gradient(135deg, #757f9a, #d7dde8)";

        } else {

            body.style.background =
                "linear-gradient(135deg, #74ebd5, #9face6)";
        }

        // Display city
        document.getElementById("cityName").textContent =
            `${data.name}, ${data.sys.country}`;

        // Display temperature
        document.getElementById("temperature").textContent =
            `${Math.round(data.main.temp)}°C`;

        // Display weather condition
        document.getElementById("condition").textContent =
            data.weather[0].description;

        // Display humidity
        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;

        // Display wind speed
        document.getElementById("windSpeed").textContent =
            `${data.wind.speed} m/s`;

        // Display feels-like temperature
        document.getElementById("feelsLike").textContent =
            `${Math.round(data.main.feels_like)}°C`;

        // Display weather icon
        const iconCode = data.weather[0].icon;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Display date and time
        const currentDate = new Date();

        document.getElementById("dateTime").textContent =
            currentDate.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short"
            }) +
            " · " +
            currentDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit"
            });

    } catch (error) {

        // Handle errors
        if (error.message === "City not found") {

            errorMessage.textContent =
                "City not found. Please check the city name.";

        } else {

            errorMessage.textContent =
                "Unable to fetch weather. Please try again.";
        }

        // Reset weather display
        document.getElementById("cityName").textContent = "City";

        document.getElementById("dateTime").textContent = "--";

        document.getElementById("temperature").textContent = "--°C";

        document.getElementById("condition").textContent =
            "Weather condition";

        document.getElementById("humidity").textContent = "--%";

        document.getElementById("windSpeed").textContent = "-- m/s";

        document.getElementById("feelsLike").textContent = "--°C";

        document.getElementById("weatherIcon").src = "";
    }
}


// Allow Enter key to search
document.getElementById("cityInput").addEventListener(
    "keypress",
    function (event) {

        if (event.key === "Enter") {
            getWeather();
        }

    }
);