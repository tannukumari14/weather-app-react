"use client"

import React, { useState } from "react";
import "./globals.css";
import Header from "./Header";
import DataDisplay from './DataDisplay';

const Page = () => {
  const [input, setInput] = useState(""); // State to manage input value
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'ad39eca759f91b30f0cd7e38e3b0ad3b';

  const handleSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(weatherData => {
  setWeatherData(weatherData); // Set weatherData state
      console.log('Weather Data:', weatherData.list);

  // Iterate over weatherData using for...in loop
  //for (const key in weatherData) {
   //    const description = weatherData.weather[0].description
    //   console.log(description )
   
     // console.log(`${key}: ${weatherData[key]}`);
  
   
 // }
   
}) 
        
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        setError(error.message);
        setWeatherData(null); // Resetting weather data in case of error
      });
  };

  return (
    <div className="app">

      
      <div className="content">
        <h1>Welcome to My Weather App</h1>
        <p id="paragraph">Find current weather conditions:</p>
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <input
            type="text"
            placeholder="Enter location..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {error && <p>Error: {error}</p>}
        {weatherData && (
          <>
           // <DataDisplay weatherData= {weatherData} />
            
          </>
        )}
      </div>
    </div>
  );
};

export default Page;

