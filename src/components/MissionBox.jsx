import React, { Component } from 'react';
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
      <div className="container">
        <div>
          <div className="missionBox">
            <h2>Ta mission!</h2>
            <p>{consignes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionBox;
