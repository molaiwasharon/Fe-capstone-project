import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import ErrorMessage from "./Components/ErrorMessage";
import axios from "axios";
import "./style.css";
import Footer from "./Components/Footer";

const App = () => {
  const [city, setCity] = useState("London"); // Set default city
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Function to format the current date and time
  const displayCurrentDateTime = () => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[currentDate.getDay()];
    const hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();
    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();

    return `${day} ${hours}:${minutes}`;
  };

  // Fetch weather data from OpenWeather API
  const fetchWeatherData = async () => {
    const apiKey = "4b90b4687ac84bce30170872e96d8100"; // Replace with your actual OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setWeatherData(null);
      setError(
        "Unable to fetch weather data. Please check the city name and try again."
      );
    }
  };

  // Update weather and current time when city changes
  useEffect(() => {
    fetchWeatherData(); // Fetch weather on city change or initial mount
    setCurrentDateTime(displayCurrentDateTime()); // Update time immediately
  }, [city]); // Add city as dependency

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(displayCurrentDateTime());
    }, 60000);

    return () => clearInterval(timer); // Clean up the timer
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeatherData} setCity={setCity} />

      {error && <ErrorMessage message={error} />}
      {weatherData && (
        <WeatherCard data={weatherData} currentDateTime={currentDateTime} />
      )}

      <Footer />
    </div>
  );
};

export default App;
