import React from 'react';
import MissionBox from './MissionBox';
import Button from './Button';
import Arrow from './Arrow';
import Points from './Points';
import './MissionBoxContainer.css';
import BouteillePlastique from './img/BouteillePlastique-01.svg';

const missions = [
  {
    id: 1,
    consignes:
      "Recycle tes bouteilles en plastique, jette-les dans un Tri'Sac jaune ou dans un point d'apport plastique.",
    points: 20,
    image: { BouteillePlastique },
  },
  {
    id: 2,
    consignes:
      'Recycle tes bouteilles et pots en verre, jette-les dans un conteneur dédié près de chez toi. ',
    points: 30,
    image: '',
  },
  {
    id: 3,
    consignes:
      'Remplace tes achats sous emballages plastique/carton par des produits vendu en vrac. ',
    points: 20,
    image: '',
  },
  {
    id: 4,
    consignes:
      'Trie tes déchets électroniques, ampoules, piles,... en déchetterie ',
    points: 10,
    image: '',
  },
  {
    id: 5,
    consignes:
      'Réduis le volume de ta poubelle en compostant tes déchets alimentaires. ',
    points: 30,
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
