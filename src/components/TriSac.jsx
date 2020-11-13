/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import axios from 'axios';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

class TriSac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triSacList: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_dates-lieux-retrait-sacs-trisac-rendez-vous-quartier-nantes&q=&facet=type_lieu&facet=quartier&facet=type_distribution&facet=location&facet=adresse&facet=numero&apikey=5f0a64b92cf369cddcf2977da97cfad9b6aac115497c3cdbb8a624b5'
      )
      .then((response) => {
        this.setState({
          triSacList: response.data.records,
        });
      });
  }

  render() {
    const { triSacList } = this.state;
    const myIcon = new L.Icon({
      iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -10],
    });
    return (
      <div className="trisac">
        {triSacList.map((sacList) => {
          return (
            <Marker
              key={sacList.fields.location}
              position={sacList.fields.location}
              icon={myIcon}
            >
              <Popup>
                Adresse:
                {sacList.fields.adresse}
              </Popup>
            </Marker>
          );
        })}
      </div>
    );
  }
}

export default TriSac;
