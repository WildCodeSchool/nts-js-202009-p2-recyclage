import React from 'react';
import MissionBox from './MissionBox';
import Button from './Button';
import Arrow from './Arrow';

function MissionBoxContainer() {
  return (
    <div>
      <Arrow direction="left" />
      <div>
        <MissionBox />
        <Button />
      </div>
      <Arrow direction="right" />
    </div>
  );
}

export default MissionBoxContainer;
