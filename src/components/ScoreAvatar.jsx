import React from 'react';
import PropTypes from 'prop-types';
import './ScoreAvatar.css';
import ProgressBar from './ProgressBar';

class ScoreAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const local = parseFloat(this.localStorage.getItem('Progress'));
    this.state = {
      percent: local || 0,
      bar: this.props.jauge,
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount() {
    const { percent, bar } = this.state;
    this.updateProgress('percent', percent + bar);
  }


  updateProgress(field, val) {
    const { percent, bar } = this.state;
    if (percent === 1) {
      this.setState({ [field]: 0 });
    } else if (percent > 1 - bar) {
      this.setState({ [field]: 1 });
    } else {
      this.setState({ [field]: val });
    };
  }

  render() {
    const { percent } = this.state;
    this.localStorage.setItem('Progress', percent.toString());
    let result = Math.round(percent * 100);
    return (
      <div className="ScoreAvatar">
        <div className="Jauge">
          <ProgressBar width={300} percent={percent} />
          <h3>{result} points !</h3>
        </div>
      </div>
    );
  }
}

export default ScoreAvatar;

ScoreAvatar.propTypes = {
  jauge: PropTypes.number.isRequired,
};
