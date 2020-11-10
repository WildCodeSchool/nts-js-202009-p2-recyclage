import React from 'react';
import MissionBox from './MissionBox';
import Button from './Button';
import Arrow from './Arrow';
import Points from './Points';

function MissionBoxContainer() {
  return (
    <div>
      <Arrow direction="left" />
      <div>
        <div className="pointsDirection">
          <Points />
        </div>
        <MissionBox />
        <Button />
      </div>
      <Arrow direction="right" />
    </div>
  );
}

export default MissionBoxContainer;
