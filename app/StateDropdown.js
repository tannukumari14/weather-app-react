import React, { useEffect, useState } from 'react';

const StateDropdown = ({ country, onSelectState }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (country) {
      fetch(`https://api.example.com/states?country=${country}`)
        .then(response => response.json())
        .then(data => setStates(data))
        .catch(error => console.error('Error fetching states:', error));
    }
  }, [country]);

  return (
    <select onChange={(e) => onSelectState(e.target.value)}>
      <option value="">Select State</option>
      {states.map(state => (
        <option key={state.code} value={state.code}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
