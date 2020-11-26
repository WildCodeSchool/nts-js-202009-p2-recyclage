/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

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

Toggle.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  onColor: PropTypes.string.isRequired,
};
