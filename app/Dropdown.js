import React from 'react';

const Dropdown = ({ onCountryClick }) => {
  const countries = ['USA', 'Canada', 'India', 'Australia'];

  return (
    <div className="dropdown">
      <h2>Select a Country</h2>
      <ul>
        {countries.map(country => (
          <li key={country} onClick={() => onCountryClick(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
