import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div>
      <h2>{weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default WeatherDisplay;
