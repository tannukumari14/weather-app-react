import React from 'react';

const DataDisplay = ({ weatherData }) => {
  if (weatherData.list.length > 0) {
    const firstWeatherItem = weatherData.list[0];
    const temp = firstWeatherItem.main.temp;
    const description = firstWeatherItem.weather[0].description;
    const sunset = weatherData.city.sunset;
    const sunrise = weatherData.city.sunrise;

    return (
      <div className="display">
        <h2> Current Weather</h2>
        <p>Temperature: {temp}°C</p>
        <p> Description: {description}</p>
        <p>Sunrise: {new Date(weatherData.city.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(weatherData.city.sunset * 1000).toLocaleTimeString()}</p>


          
        <h2>Weather Forecast</h2>     
      <p>
        Date: {firstWeatherItem.dt_txt}
      </p>
      <p>
        Temperature: {firstWeatherItem.main.temp}°C
      </p>
      
      <p>
        Description: {firstWeatherItem.weather[0].description}

      </p>
      <p>
        Wind Speed: {weatherData.list[0].wind.speed} m/s
      </p>
      <p>
        Humidity: {firstWeatherItem.main.humidity}%
      </p>
    
    </div>
    );
  } 
};

export default DataDisplay;
