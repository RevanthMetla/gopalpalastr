import React from 'react';
import HamburgerMenu from './HamBurgerMenu'; // Make sure this path is correct
import './HamburgerMenu.css'; // And this path is correct
import '../App.css'; // We'll keep the main CSS here for global styles

const Introduction = () => {
  const websiteName = "Gopal Palastri"; // You can change this to your desired name

  return (
    <div className="dopamine-container dopamine-fade-in"> 
      <HamburgerMenu /> 
      <header className="dopamine-header">
        <h1>{websiteName}</h1>
      </header>

      <div className="dopamine-about">
        <p>This is the "about" section of the website. You can add more text here to introduce your site and its purpose.</p>
      </div>

      <div className="dopamine-small-divs-container">
        <div className="dopamine-small-div dopamine-div-1">
          <p>Book an Appointment</p>
        </div>
        <div className="dopamine-small-div dopamine-div-2">
          <p>Medicines</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;