import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Your global CSS file
import App from './App'; // Assuming App is your main component with routing
import reportWebVitals from './reportWebVitals';
import About from '../src/components/Aboutus/About';
import Services from './components/Services/services';
import ContactUs from './components/Contactus/contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contactus" element ={<ContactUs/>}></Route>
        {/* Add more routes as needed */}
      </Routes>
    
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
