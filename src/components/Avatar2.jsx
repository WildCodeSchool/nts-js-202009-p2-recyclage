import React from 'react';
import './Avatar2.css';
import DataAvatar from './DataAvatar';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const nickNameOk = this.localStorage.getItem('newNickName');
    this.state = {
      nickname: nickNameOk || '',
    };
    this.changeNickName = this.changeNickName.bind(this);
  }

  changeNickName(event) {
    const newNickName = event.target.value;
    this.localStorage.setItem('newNickName', newNickName);
    this.setState({
      nickname: newNickName,
    });
  }

  render() {
    const { nickname } = this.state;
    return (
      <div className="Avatar">
        <h1>Bienvenue {nickname} !</h1>
        <DataAvatar />
        <div className="LabelNickname">
          <input
            type="text"
            id="nickname"
            name="nickname"
            minLength="3"
            maxLength="14"
            placeholder="Entre ton pseudo"
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
