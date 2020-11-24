import React from 'react';
import './Avatar2.css';
import DataAvatar from './DataAvatar';

const MAX_LENGTH = 20;

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

  handleSubmit(event) {
    event.preventDefault();
  }

  changeNickName(event) {
    const newNickName = event.target.value;
    if (newNickName.length <= MAX_LENGTH) {
      this.localStorage.setItem('newNickName', newNickName);
      this.setState({
        nickname: newNickName,
      });
    }
  }

  render() {
    const { nickname } = this.state;
    const maxReached = nickname.length >= MAX_LENGTH;
    const numNickname = MAX_LENGTH - nickname.length;

    return (
      <div className="Avatar">
        <h1>Bienvenue {nickname} !</h1>
        <DataAvatar />
        <div>
          <small
            className={maxReached ? 'smallCharactersMax' : 'smallCharactersOk'}
          >
            {numNickname} caractères restants
          </small>
        </div>
        <form className="LabelNickname" onSubmit={this.handleSubmit}>
          <input
            className={maxReached ? 'lenght-max-readched' : 'length-ok'}
            type="text"
            id="nickname"
            name="nickname"
            minLength="3"
            placeholder="Entre ton pseudo"
            autoComplete="off"
            onChange={this.changeNickName}
          />
        </form>
        <p>
          Choisis un personnage ou édite-le en cliquant sur la photo et le texte
        </p>
      </div>
    );
  }
}

export default Avatar;
