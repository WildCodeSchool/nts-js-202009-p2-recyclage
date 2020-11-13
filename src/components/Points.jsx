import React, { Component } from 'react';
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
        <p>{points} pts</p>
      </div>
    );
  }
}

export default Points;
