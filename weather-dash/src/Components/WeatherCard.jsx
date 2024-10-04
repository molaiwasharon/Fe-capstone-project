import React from "react";
import "../style.css"; // Go one directory up to access the style.css

const WeatherCard = ({ data, currentDateTime }) => {
  const { name, main, weather, wind } = data;
  const temperature = main.temp;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const weatherDescription = weather[0].description;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2>{name}</h2>
        <div className="weather-info-header">
          <p className="temperature">Temperature: {temperature}°C</p>
          <img
            src={weatherIcon}
            alt={weatherDescription}
            className="weather-icon"
          />
        </div>
      </div>
      <div className="weather-info">
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} km/h</p>
        <div className="description">
          <p>{weatherDescription}</p>
        </div>
        <div className="date-time">
          <p>Current Date and Time: {currentDateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
