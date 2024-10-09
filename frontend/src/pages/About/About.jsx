

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; // Make sure to adjust the path to your CSS file

const About = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Assuming you have a route defined for the login page (e.g., '/login')
    navigate('./login'); // Navigate to the login page
  };

  return (
    <div className="about-container">
      <div className="heading">
        <h1>Convo Connect</h1>
      </div>
      <div className="about-page">
        <h1>Welcome to Convo Connect</h1>
        <p>
          We're passionate about connecting people and enabling meaningful conversations.
        </p>
        <p>
          Whether you're catching up with friends, collaborating with colleagues, or just having fun, our chat app provides a seamless experience.
        </p>
        <p>
          Feel free to explore, send messages, and enjoy the chat!
        </p>
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default About;
