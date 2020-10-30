import React from 'react';
import logo from './ImgHeader/Logo.png';
import profil from './ImgHeader/Icone_profil.png';
import './HeaderCss.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <img src={profil} alt="icone-profil" />
    </div>
  );
}

export default Header;
