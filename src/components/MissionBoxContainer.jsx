import React from 'react';
import MissionBox from './MissionBox';
import Button from './Button';
import Arrow from './Arrow';
import Points from './Points';
import './MissionBoxContainer.css';

const missions = [
  {
    id: 1,
    consignes:
      "Ta mission si tu l'acceptes est de jeter 10 bouteilles en plastique. Pour les recycler, jettes-les dans la poubelle Tri'Sac / bac jaune ou un point d'apport volontaire Plastique ou Emballage ménager. ",
    points: 20,
    image: 'src/components/img/BouteillePlastique-01.svg',
  },
  {
    id: 2,
    consignes:
      "Ta mission si tu l'acceptes est de jeter 10 cannettes. Pour les recycler, jette-les dans la poubelle Tri'Sac / bac jaune ou dans un point d'apport volontaire Emballage ménager. ",
    points: 10,
    image: '',
  },
];

class MissionBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.indexIncrement = this.indexIncrement.bind(this);
    this.indexDecrement = this.indexDecrement.bind(this);
  }

  indexIncrement() {
    if (this.state.index < missions.length - 1) {
      const plusIndex = this.state.index + 1;
      this.setState({ index: plusIndex });
    } else {
      this.setState({ index: 0 });
    }
  }

  indexDecrement() {
    if (this.state.index > 0) {
      const lessIndex = this.state.index - 1;
      this.setState({ index: lessIndex });
    } else {
      this.setState({ index: missions.length - 1 });
    }
  }

  render() {
    const { index } = this.state;
    const mission = missions[index];
    return (
      <div className="Container">
        <div onClick={this.indexDecrement} className="arrows">
          <Arrow direction="left" />
        </div>
        <div className="main">
          <div className="pointsDirection">
            <Points mission={mission} />
          </div>
          <MissionBox mission={mission} />
          <Button />
        </div>
        <div onClick={this.indexIncrement} className="arrows">
          <Arrow direction="right" />
        </div>
      </div>
    );
  }
}

export default MissionBoxContainer;
