import React, { Component } from 'react';
import pic1 from './DataImg/1.svg';
import pic2 from './DataImg/2.svg';
import pic3 from './DataImg/3.svg';
import pic4 from './DataImg/4.svg';
import pic5 from './DataImg/5.svg';
import pic6 from './DataImg/6.svg';
import pic7 from './DataImg/7.svg';
import pic8 from './DataImg/8.svg';
import pic9 from './DataImg/9.svg';
import pic10 from './DataImg/10.svg';
import pic11 from './DataImg/11.svg';
import pic12 from './DataImg/12.svg';
import pic13 from './DataImg/13.svg';
import pic14 from './DataImg/14.svg';

const dataImg = [
  {
    image: pic1,
  },
  {
    image: pic2,
  },
  {
    image: pic3,
  },
  {
    image: pic4,
  },
  {
    image: pic5,
  },
  {
    image: pic6,
  },
  {
    image: pic7,
  },
  {
    image: pic8,
  },
  {
    image: pic9,
  },
  {
    image: pic10,
  },
  {
    image: pic11,
  },
  {
    image: pic12,
  },
  {
    image: pic13,
  },
  {
    image: pic14,
  },
];

class DataAvatar extends Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const avatar = this.localStorage.getItem('Avatar');
    this.state = {
      index: 0,
      picture: avatar || dataImg[0].image,
    };
    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
  }

  left() {
    if (this.state.index > 0) {
      const leftIndex = this.state.index - 1;
      this.setState({ index: leftIndex });
      this.setState({ picture: dataImg[this.state.index].image });
    } else {
      this.setState({ index: 13 });
      this.setState({ picture: dataImg[this.state.index].image });
    }
  }

  right() {
    if (this.state.index < 13) {
      const rightIndex = this.state.index + 1;
      this.setState({ index: rightIndex });
      this.setState({ picture: dataImg[this.state.index].image });
    } else {
      this.setState({ index: 0 });
      this.setState({ picture: dataImg[this.state.index].image });
    }
  }

  render() {
    const { picture } = this.state;
    this.localStorage.setItem('Avatar', picture);
    return (
      <div className="Avatar">
        <div className="Align">
          <div className="ButtonLeft" onClick={this.left}></div>
          <figure
            onClick={(event) => {
              const newImage = prompt("Insère l'url de ton image de profil");
              this.setState({ picture: newImage });
            }}
          >
            <img alt="Avatar" src={picture} className="Circle" />
          </figure>
          <div className="ButtonRight" onClick={this.right}></div>
        </div>
      </div>
    );
  }
}

export default DataAvatar;
