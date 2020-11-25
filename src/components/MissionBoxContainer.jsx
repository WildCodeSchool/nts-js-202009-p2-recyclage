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
      "Recycle tes bouteilles en plastique, jette-les dans un Tri'Sac jaune ou dans un point d'apport plastique.",
    points: 20,
    jauge: 0.2,
  },
  {
    id: 2,
    consignes:
      'Recycle tes bouteilles et pots en verre, jette-les dans un conteneur dédié près de chez toi. ',
    points: 30,
    jauge: 0.3,
  },
  {
    id: 3,
    consignes:
      'Remplace tes achats sous emballages plastique/carton par des produits vendu en vrac. ',
    points: 20,
    jauge: 0.2,
  },
  {
    id: 4,
    consignes:
      'Trie tes déchets électroniques, ampoules, piles,... en déchetterie ',
    points: 10,
    jauge: 0.1,
  },
  {
    id: 5,
    consignes:
      'Réduis le volume de ta poubelle en compostant tes déchets alimentaires. ',
    points: 30,
    jauge: 0.3,
  },
];

class MissionBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      challengeAccepted: false,
    };
    this.changeBar = this.changeBar.bind(this);
    this.indexIncrement = this.indexIncrement.bind(this);
    this.indexDecrement = this.indexDecrement.bind(this);
  }

  changeBar(jauge) {
    const { barChanged } = this.props;
    barChanged(jauge);
    this.setState({
      challengeAccepted: !this.state.challengeAccepted,
    });
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
    const { index, challengeAccepted } = this.state;
    const mission = missions[index];
    return (
      <div>
        <div className="Container">
          <div onClick={this.indexDecrement} className="arrows">
            <Arrow direction="left" />
          </div>
          <div className="main">
            <div className="pointsDirection">
              <Points mission={mission} />
            </div>
            <MissionBox mission={mission} />
            <Button mission={mission} changeBar={this.changeBar} />
          </div>
          <div onClick={this.indexIncrement} className="arrows">
            <Arrow direction="right" />
          </div>
        </div>
        <div
          className={challengeAccepted === true ? 'acceptMission' : 'noMission'}
        >
          Félicitations, tu as gagné des points dans ton profil !
          <span role="img" aria-label="wouah">
            🎉
          </span>
        </div>
      </div>
    );
  }
}

export default MissionBoxContainer;
