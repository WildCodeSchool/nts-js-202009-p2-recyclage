import React from 'react';
import Header from './Header';
import Avatar from './Avatar';
import ScoreAvatar from './ScoreAvatar';
import Footer from './Footer';

function Profil(props) {
  return (
    <div className="profil">
      <Header />
      <Avatar />
      <ScoreAvatar jauge={props.jauge} />
      <Footer />
    </div>
  );
}

export default Profil;
