import React from 'react';
import './ProgressBar.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ width, percent }) => {
  const value = width * percent;
  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
