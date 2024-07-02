import React from 'react';
import './about.css'; // Make sure to create and import the CSS file
import Madhu from './madhu.jpg';
import Pranav from './pranav.jpg';
import { useNavigate } from 'react-router-dom'; // Updated import

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackToMainPage = () => {
    navigate('/'); // Adjust the path to your main page
  };

  return (
    <div className="about-us-container">
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to our Weather Forecasting Web App! We are dedicated to delivering the best weather data through our website.
          For any other query you can ask doubts related to weather via sending us mails.
        </p>
      </section>

      <section className="history-section">
        <h2> History of Weather Prediction</h2>
        <div className="history-content">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Global_Climate_Model.png/280px-Global_Climate_Model.png"
            alt="Company History"
          />
          <p>
          The history of weather forecasting began with early observations and superstitions, evolving into a formal scientific discipline by the 17th and 18th centuries. Pioneers like Edmond Halley and Benjamin Franklin laid foundational knowledge, leading to the systematic collection of weather data facilitated by telegraph communication in the 19th century. Robert FitzRoy pioneered storm warnings, and the advent of numerical weather prediction models in the 20th century marked a significant leap. Satellite technology and advanced computing in the latter half of the 20th century revolutionized forecasting accuracy, integrating climate science for comprehensive predictions today.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <img 
            src="https://i0.wp.com/aiinasia.com/wp-content/uploads/2024/06/AI-weather-forecasting.png?fit=1232%2C928&ssl=1"
            alt="Our Mission"
          />
          <p>
          The mission of weather forecasting is to predict and communicate future atmospheric conditions with accuracy and timeliness. By analyzing data from satellites, radars, ground stations, and numerical models, meteorologists aim to provide vital information for public safety, aviation, agriculture, marine operations, and various industries. The goal is to mitigate risks associated with weather-related hazards, enable effective planning, and support sustainable development by understanding and anticipating the impacts of weather on society and the environment.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-content">
          <div className="team-member">
            <img 
              src={Pranav} alt="Pranav Kashikey"
            />
            <h3>Pranav Kashikey</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="team-member">
            <img 
              src={Madhu} alt="Madhubala"
            />
            <h3>Madhubala</h3>
            <p>Front End Developer</p>
          </div>
        </div>
      </section>

      <div className="back-button-container">
        <button className="back-button" onClick={handleBackToMainPage}>
          Back to Main Page
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
