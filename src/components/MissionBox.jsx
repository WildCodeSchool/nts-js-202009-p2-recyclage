import React from 'react';
import './MissionBox.css';
import Points from './Points';

function MissionBox() {
  return (
    <div className="container">
      <div>
        <div className="missionBox">
          <h2>Ta mission!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <Points />
      </div>
    </div>
  );
}

export default MissionBox;
