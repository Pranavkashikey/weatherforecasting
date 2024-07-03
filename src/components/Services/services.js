import React from 'react';
import './services.css';
import { useNavigate } from 'react-router-dom';
// import FooterCarousel from '../Corusel/corosel';

const Services = () => {
  const navigate = useNavigate();
  
  const handleBackToMainPage = () => {
    navigate('/'); // Adjust the path to your main page
  };

  return (
    <><div className="services-page">
          <header className="services-header">
              <h1>Our Services</h1>
              <p>Accurate and Reliable Weather Forecasting</p>
          </header>

          <section className="service">
              <h2>Daily Weather Updates</h2>
              <p>Get daily weather updates for your location to stay prepared.</p>
          </section>

          <section className="service">
              <h2>Weekly Weather Forecast</h2>
              <p>Plan ahead with our 7-day weather forecast.</p>
          </section>

          <section className="service">
              <h2>Severe Weather Alerts</h2>
              <p>Receive timely alerts for severe weather conditions.</p>
          </section>

          <section className="service">
              <h2>Weather Radar</h2>
              <p>Access live weather radar to track storms and precipitation in real-time.</p>
          </section>

          <section className="service">
              <h2>Climate Reports</h2>
              <p>Get detailed climate reports for various regions to understand long-term weather patterns.</p>
          </section>

          <footer className="services-footer">
              <p>Contact us for more information about our services.</p>
              <button className="back-button" onClick={handleBackToMainPage}>
                  Back to Main Page
              </button>
          </footer>
      </div></>
  );
}

export default Services;
