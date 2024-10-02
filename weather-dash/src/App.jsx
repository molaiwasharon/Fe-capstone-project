import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import ErrorMessage from "./Components/ErrorMessage";
import axios from "axios";
import "./style.css";

const App = () => {
  const [city, setCity] = useState("London"); // Set default city here
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

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

  useEffect(() => {
    fetchWeatherData(); // Call fetchWeatherData on component mount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="app-container">
      <h1 className="title">Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeatherData} setCity={setCity} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
