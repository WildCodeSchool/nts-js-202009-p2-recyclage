import React from 'react';
import './ProgressBar.css';

<<<<<<< HEAD
const ProgressBar = ({ width, percent }) => {
=======
 const ProgressBar = ({ width, percent }) => {
>>>>>>> 1fb0dc548e74bd739f0a00e265f51a212f8b76c1
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
