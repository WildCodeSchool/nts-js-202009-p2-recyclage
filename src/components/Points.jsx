import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Points.css';

class Points extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mission } = this.props;
    const { points } = mission;
    return (
      <div className="Points">
        <p className="points">{points} pts</p>
      </div>
    );
  }
}

export default Points;

Points.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
