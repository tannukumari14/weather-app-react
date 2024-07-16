import React from 'react';

const FlagIcon = ({ weatherData }) => {
  if (!weatherData || !weatherData.list || !weatherData.city) {
    return <p>Loading...</p>;
  }

  const temp = weatherData.list[0].main.temp;
  const description = weatherData.list[0].weather[0].description;
  const sunset = new Date(weatherData.city.sunset * 1000).toLocaleTimeString();
  const sunrise = new Date(weatherData.city.sunrise * 1000).toLocaleTimeString();

  return (
    <div className="weather-data">
      <h3>Current Weather in {weatherData.city.name}</h3>
      <p>Temperature: {temp}°C</p>
      <p>Description: {description}</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  );
};

export default FlagIcon;
