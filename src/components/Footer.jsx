import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Footer.css';

export default function Footer() {
  return (
    <IconContext.Provider value={{ size: '2.5em', color: 'white' }}>
      <div className="social-container">
        <div className="social-icons">
          <a href="http://facebook.com" external className="picto">
            <FaFacebook />
          </a>
          <a href="http://intagram.com" external className="picto">
            <FaInstagram />
          </a>
          <a href="http://twitter.com" external className="picto">
            <FaTwitter />
          </a>
        </div>
      </div>
    </IconContext.Provider>
  );
}
