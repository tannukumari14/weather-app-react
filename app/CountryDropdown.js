import React, { useEffect, useState } from 'react';

const CountryDropdown = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <select onChange={(e) => onSelectCountry(e.target.value)}>
      <option value="">Select Country</option>
      {countries.map(country => (
        <option key={country.cca2} value={country.cca2}>
          {country.name.common}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;
