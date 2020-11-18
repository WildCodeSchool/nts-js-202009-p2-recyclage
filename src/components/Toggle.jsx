/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Toggle.css';

// eslint-disable-next-line react/prop-types
const Toggle = ({ isOn, handleToggle, onColor }) => {
  return (
    <div className="toggleButton">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
    </div>
  );
};

export default Toggle;
