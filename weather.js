import React, { useState } from 'react';
import DataDisplay from '../aap/DataDisplay';

const Weather = () => {
    const [search, setSearch] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [locationData, setLocationData] = useState(null);

    const handleSearch = async () => {
        const weatherApiKey = '34218f4facdf1adb47002ff5504d6059';
        const geocodeApiKey = '66951f850dbea857843719alq7563a4';

        try {
            // Fetch weather data
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${weatherApiKey}`);
            const weatherData = await weatherResponse.json();
            setWeatherData(weatherData);

            // Fetch location data
            const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${geocodeApiKey}`);
            const geocodeData = await geocodeResponse.json();
            if (geocodeData.results.length > 0) {
                setLocationData(geocodeData.results[0].geometry.location);
            } else {
                setLocationData(null);
            }
        } catch (error) {    const [search, setSearch] = useState('');
            const [weatherData, setWeatherData] = useState(null);
            const [locationData, setLocationData] = useState(null);
        
            const handleSearch = async () => {
                const weatherApiKey = '34218f4facdf1adb47002ff5504d6059';
                const geocodeApiKey = '66951f850dbea857843719alq7563a4';
        
                try {
                    // Fetch weather data
                    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${weatherApiKey}`);
                    const weatherData = await weatherResponse.json();
                    setWeatherData(weatherData);
        
                    // Fetch location data
                    const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${geocodeApiKey}`);
                    const geocodeData = await geocodeResponse.json();
                    if (geocodeData.results.length > 0) {
                        setLocationData(geocodeData.results[0].geometry.location);
                    } else {
                        setLocationData(null);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
        
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter country"
            />
            <button onClick={handleSearch}>Search</button>

            {weatherData && locationData && <DataDisplay weatherData={weatherData} locationData={locationData} />}
        </div>
    );
};

export default Weather;
