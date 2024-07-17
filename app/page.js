"use client"
import React, { useState } from 'react';
import './globals.css';
import Header from './Header';
import DataDisplay from './DataDisplay';
import Dropdown from './Dropdown';

const Page = () => {
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isCountryClicked, setIsCountryClicked] = useState(false);
  const [dataSource, setDataSource] = useState('');

  const apiKey = 'ad39eca759f91b30f0cd7e38e3b0ad3b';

  const handleSearch = (location , source) => {
    let query = location || input;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(weatherData => {
        setWeatherData(weatherData);
        setIsCountryClicked(!!location);
        setDataSource(source);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        setError(error.message);
      });
  };

  const onCountryClick = (country) => {
    setInput('');
    handleSearch(country, "flag");
  };

  const onDropdownClick = (country) => {
    setInput('');
    handleSearch(country, 'dropdown');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(null, 'search');
  };

  return (
    <div className="content">
      <Dropdown onCountryClick={onDropdownClick} />
      <Header onCountryClick={onCountryClick} weatherData={dataSource === 'flag' ? weatherData : null} />
     
      <h1>Welcome to My Weather App</h1>
      <h2>Find current weather conditions:</h2>
      {dataSource !== 'flag' && dataSource !== 'dropdown' && (
        <form className="search-form" onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Enter location..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      )}

      {error && <p>Error: {error}</p>}
      {weatherData && dataSource === 'search' && (
        <DataDisplay weatherData={weatherData} />
      )}
      {weatherData && dataSource === 'dropdown' && (
        <DataDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default Page;