// src/components/quote/Quote.js
import React from "react";
import "./qoutes.css";

const Quote = () => {
  return (
    <><div>
      <div className="quote">
        <p>"The best thing one can do when it's raining is to let it rain." - Henry Wadsworth Longfellow</p>
      </div>
      <div className="about">
        Weather forecasting uses tools, observational data, science, and technology to predict the weather hours, days, and months in advance for a given location. Before computer models, weather forecasting was done by observation. The first computer-generated weather forecast was made in 1955. Weather forecasting is used for knowing our daily weather and also used for long-term forecasting. Forecasting the weather involves recording the ongoing measurements of temperature, pressure, precipitation, wind speed, and the amount of cloud cover, and giving those current readings and reports to the public. The reports of the current conditions are then used to predict the weather further out. Weather affects everyone. Hazardous and severe weather forecasts are very important as they can potentially save lives, property, and crops.
      </div>
    </div>
    <div className="about1">
  <div className="image-container">
    <img alt="quotes" src="https://www.weathercompany.com/wp-content/uploads/2024/01/hero-data-vis-world-weather-explainer-vid.jpg" />
    <p className="image-text">Weather visualization transforms complex meteorological data into intuitive visual formats, enabling better understanding and decision-making</p>
  </div>
  <div className="image-container">
    <img alt="quotes" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZQlWVmOwwG1ezZ_L-pOOZj5Kvo6FAsG57A&s" />
    <p className="image-text">AI weather forecasting leverages advanced algorithms and machine learning to provide highly accurate and timely weather predictions</p>
  </div>
  <div className="image-container">
    <img alt="quotes" src="https://static.scientificamerican.com/sciam/cache/file/FF5155B8-CC20-4CD6-ADB4F04E328FE114_source.jpg" />
    <p className="image-text">Satellite views enhance weather forecasting by providing real-time, high-resolution imagery of atmospheric conditions globally</p>
  </div>
</div>
</>
  );
};

export default Quote;
