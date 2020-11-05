import React from 'react';
import { Link } from 'react-router-dom';
import logo from './ImgHeader/Logo.png';
import profil from './ImgHeader/Icone_profil.png';
import './HeaderCss.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/profil">
        <img src={profil} alt="icone-profil" />
      </Link>
    </div>
  );
}

export default Header;
