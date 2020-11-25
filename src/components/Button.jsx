import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test(jauge) {
    const { changeBar } = this.props;
    changeBar(jauge);
  }

  render() {
    const { mission } = this.props;
    const { jauge } = mission;
    return (
      <div className="container">
        <button
          type="button"
          className="doneBttn"
          onClick={() => this.test(jauge)}
        >
          Done !
        </button>
      </div>
    );
  }
}

export default Button;
