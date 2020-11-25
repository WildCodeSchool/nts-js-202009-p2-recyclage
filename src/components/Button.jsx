import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.state.point);
    return (
      <div className="container">
        <button type="button" onClick={this.changePoint} className="doneBttn">
          Done !
        </button>
      </div>
    );
  }
}

export default Button;
