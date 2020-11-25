import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ width, percent }) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setValue(width * percent);
  });
  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  );
};

export default ProgressBar;
