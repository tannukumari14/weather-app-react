import React, { useState } from 'react';
import FlagIcon from './FlagIcon';

const Header = ({ onCountryClick, weatherData }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleFlagClick = (country, event) => {
    const rect = event.target.getBoundingClientRect();
    setPopoverPosition({ x: rect.left, x: rect.bottom });
    onCountryClick(country);
    setPopoverVisible(true);
  };

  return (
    <div className="header">
      <div className="svg_image">
        <img
          src="https://www.svgrepo.com/show/128872/india.svg"
          alt="India Flag"
          className="flag-image"
          onClick={(event) => handleFlagClick('India', event)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/9906/9906532.png"
          alt="USA Flag"
          className="flag-image"
          onClick={(event) => handleFlagClick('USA', event)}
        />
        <img
          src="https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Germany-2-512.png"
          alt="Germany Flag"
          className="flag-image"
          onClick={(event) => handleFlagClick('Germany', event)}
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/256/Flag_of_Nepal.png"
          alt="Nepal Flag"
          className="flag-image"
          onClick={(event) => handleFlagClick('Nepal', event)}
        />
      </div>
      {popoverVisible && <FlagIcon weatherData={weatherData} position={popoverPosition} />}
    </div>
  );
};

export default Header;
