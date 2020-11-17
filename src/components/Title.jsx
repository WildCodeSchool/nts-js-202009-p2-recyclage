import React from 'react';
import './Title.css';
import Logo from './img/Titre.svg';

function Title() {
  return (
    <div className="Title">
      <img src={Logo} alt="Logo" />
    </div>
  );
}

export default Title;
