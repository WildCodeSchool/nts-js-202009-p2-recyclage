import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
Button.propTypes = {
  changeBar: PropTypes.func.isRequired,
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Button;
