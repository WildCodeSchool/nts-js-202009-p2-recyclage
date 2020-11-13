import React from 'react';
import axios from 'axios';
import './Avatar2.css';


class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const name = this.localStorage.getItem("Nickname");
    const pic = this.localStorage.getItem("Avatar");
    this.state = {
      picture: pic || 'https://randomuser.me/api/portraits/women/60.jpg',
      nickname: name || 'Jacqueline',
    }

    this.changePic = this.changePic.bind(this);
  }

  changePic() {
    axios.get('https://randomuser.me/api?nat=fr')
      .then((response) => response.data)
      .then((data) => {
        this.localStorage.setItem('Nickname', data.results[0].name.first);
        this.localStorage.setItem('Avatar', data.results[0].picture.large);
        this.setState({
          picture: data.results[0].picture.large,
          nickname: data.results[0].name.first,
        });
      });
  }

  render() {
    return (
      <div className="Avatar">
        <h1>Bienvenue !</h1>
        <div className="Align">
          <div className="ButtonLeft" onClick={this.changePic}></div>
          <figure onClick={event => {
            const newImage = prompt("Insère l'url de ton image de profil");
            this.localStorage.setItem('Avatar', newImage);
            this.setState({ picture: newImage });
          }}>
            <img alt="Avatar" src={this.state.picture} className="Circle" />
          </figure>
          <div className="ButtonRight" onClick={this.changePic}></div>
        </div>
        <div className="LabelNickname">
          <h3 className="Nickname" contentEditable="true">
            {this.state.nickname}
          </h3>
        </div>
        <p>
          Choisis un personnage ou édite-le en cliquant sur la photo et le texte
        </p>
      </div>
    );
  }
}

export default Avatar;
