import React from 'react';
import { Link } from 'react-router-dom';
import { FaRecycle } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import './HeaderCss.css';

function Header() {
  return (
    <IconContext.Provider value={{ size: '2em', color: '77ecba' }}>
      <div className="header">
        <Link to="/">
          <FaRecycle alt="logo" />
        </Link>
        <Link to="/profil">
          <CgProfile alt="icone-profil" />
        </Link>
      </div>
    </IconContext.Provider>
  );
}

export default Header;
