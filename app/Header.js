// Header.js

import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="svg_image">
        <img
          src="https://www.svgrepo.com/show/128872/india.svg"
          alt="India Flag"
          className="flag-image"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/9906/9906532.png"
          alt="USA Flag"
          className="flag-image"
        />
        <img
          src="https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Germany-2-512.png"
          alt="Germany Flag"
          className="flag-image"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/256/Flag_of_Nepal.png"
          alt="Nepal Flag"
          className="flag-image"
        />
      </div>
    </div>
  );
};

export default Header;

