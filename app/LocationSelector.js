import React, { useState } from 'react';
import CountryDropdown from './CountryDropdown';
import StateDropdown from './StateDropdown';
import CityDropdown from './CityDropdown';

const LocationSelector = ({ onSelectCity }) => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity);
    onSelectCity(selectedCity);
  };

  return (
    <div>
      <CountryDropdown onSelectCountry={setCountry} />
      <StateDropdown country={country} onSelectState={setState} />
      <CityDropdown state={state} onSelectCity={handleSelectCity} />
      <div>
        <p>Selected Country: {country}</p>
        <p>Selected State: {state}</p>
        <p>Selected City: {city}</p>
      </div>
    </div>
  );
};

export default LocationSelector;
