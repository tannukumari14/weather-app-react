import React from 'react';
import FlagIcon from './FlagIcon'

const DataDisplay = ({ weatherData }) => {
  const firstWeatherItem = weatherData.list[0];;

  const windSpeed = firstWeatherItem.wind.speed;
  const temp = firstWeatherItem.main.temp;
  const description = firstWeatherItem.weather[0].description;
  const sunset = new Date(weatherData.city.sunset * 1000).toLocaleTimeString();
  const sunrise = new Date(weatherData.city.sunrise * 1000).toLocaleTimeString();
  
  

    let alertMessage = '';
    let Message = '';
    let alertRainMessage = '';

    if (temp > 30) {
      alertMessage = 'Heat-based storm alert: High temperature detected. ';
    } else {
      alertMessage = 'No storm alert based on temperature. ';
    }

    if (windSpeed > 20) {
      Message = 'Wind-based storm alert: High wind speed detected. ';
    } else {
      Message = 'No storm alert based on wind speed.';
    }



  return (
    <div className="display">
        <p>{Message}</p>
      <p>{alertMessage}</p>
      <h2>Current Weather</h2>
      <p>Temperature: {temp}°C </p>
      <p>Description: {description}</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
      <h2>Weather Forecast</h2>
      <p>Date: {firstWeatherItem.dt_txt}</p>
      <p>Temperature: {firstWeatherItem.main.temp}°C</p>
      <p>Description: {firstWeatherItem.weather[0].description}</p>
      <p>Wind Speed: {firstWeatherItem.wind.speed} m/s</p>
      <p>Humidity: {firstWeatherItem.main.humidity}%</p>
   
   
    </div>
  );
};

export default DataDisplay;

