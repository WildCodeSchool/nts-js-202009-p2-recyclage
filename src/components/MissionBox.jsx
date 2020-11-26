import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionBox.css';

class MissionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mission } = this.props;
    const { consignes } = mission;
    return (
      <div>
        <div className="missionBox">
          <h2 className="missiontitle">Ta mission !</h2>
          <p className="missions">{consignes}</p>
        </div>
      </div>
    );
  }
}

MissionBox.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MissionBox;
