import React from "react";
import "./globals.css";   

const Page = () => {
  return (
    <div className="page-container">
      <div className="background-image">
        <div className="content">
          <h1>Welcome to My Weather App</h1>
          <p>Find current weather conditions:</p>
          <form className="search-form">
            <input type="text" placeholder="Enter location..." />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
