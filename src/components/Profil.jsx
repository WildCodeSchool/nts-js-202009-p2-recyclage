import React from 'react';
import Header from './Header';
import Avatar2 from './Avatar2';
import ScoreAvatar from './ScoreAvatar';
import Footer from './Footer';

function Profil(props) {

  return (
    <div className="profil">
      <Header />
      <Avatar2 />
      <ScoreAvatar jauge= {props.jauge}/>
      <Footer />
    </div>
  );
}

export default Profil;
