import React from 'react';
import axios from 'axios';
import './Avatar2.css';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const pic = this.localStorage.getItem('Avatar');
    const nickNameOk = this.localStorage.getItem('newNickName');
    this.state = {
      picture: pic || 'https://randomuser.me/api/portraits/women/60.jpg',
      nickname: nickNameOk || '',
    };
    this.changePic = this.changePic.bind(this);
    this.changeNickName = this.changeNickName.bind(this);
  }

  changeNickName(event) {
    const newNickName = event.target.value;
    this.localStorage.setItem('newNickName', newNickName);
    this.setState({
      nickname: newNickName,
    });
  }

  changePic() {
    axios
      .get('https://randomuser.me/api?nat=fr')
      .then((response) => response.data)
      .then((data) => {
        this.localStorage.setItem('Avatar', data.results[0].picture.large);
        this.setState({
          picture: data.results[0].picture.large,
        });
      });
  }

  render() {
    const { nickname, picture } = this.state;
    return (
      <div className="Avatar">
        <h1>Bienvenue, {nickname}!</h1>
        <div className="Align">
          <div className="ButtonLeft" onClick={this.changePic}></div>
          <figure
            onClick={(event) => {
              const newImage = prompt("Insère l'url de ton image de profil");
              this.localStorage.setItem('Avatar', newImage);
              this.setState({ picture: newImage });
            }}
          >
            <img alt="Avatar" src={picture} className="Circle" />
          </figure>
          <div className="ButtonRight" onClick={this.changePic}></div>
        </div>
        <div className="LabelNickname">
          <h3 className="EnterNickName">Entre ton pseudo :</h3>
          <input
            type="text"
            id="nickname"
            name="nickname"
            minlength="3"
            maxlength="8"
            placeholder="ici"
            autoComplete="off"
            onChange={this.changeNickName}
          ></input>
        </div>
        <p>
          Choisis un personnage ou édite-le en cliquant sur la photo et le texte
        </p>
      </div>
    );
  }
}

export default Avatar;
