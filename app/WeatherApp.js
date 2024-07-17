import React, { useEffect, useState } from 'react';
import LocationSelector from './LocationSelector';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error('Error fetching weather:', error));
    }
  }, [city]);

  return (
    <div>
      <LocationSelector onSelectCity={setCity} />
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°K</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
