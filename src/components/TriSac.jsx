import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Maps.css';
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
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/?', {
        params: {
          dataset:
            '244400404_dates-lieux-retrait-sacs-trisac-rendez-vous-quartier-nantes',
          rows: 1000,
          apikey: '5f0a64b92cf369cddcf2977da97cfad9b6aac115497c3cdbb8a624b5',
        },
      })
      .then((response) => {
        this.setState({
          triSacList: response.data.records,
        });
      });
  }

  render() {
    const { triSacList } = this.state;
    const { filter } = this.props;
    const myIcon = new L.Icon({
      iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -10],
    });
    return (
      <>
        {triSacList
          .filter((filterTriSac) => {
            if (filter.filter === 'Tri-sac') {
              return true;
            }
            if (filter.filter === 'Rendez vous Tri-sac 2020') {
              if (
                filterTriSac.fields.rdv4 !== undefined &&
                filterTriSac.fields.hdebut4 !== undefined &&
                filterTriSac.fields.hfin4 !== undefined
              ) {
                return true;
              }
            }
            if (filter.filter === 'Rendez vous Tri-sac 2021') {
              if (
                filterTriSac.fields.rdv1 !== undefined &&
                filterTriSac.fields.hdebut1 !== undefined &&
                filterTriSac.fields.hfin1 !== undefined
              ) {
                return true;
              }
            }
            return false;
          })
          .map((sacList) => {
            return (
              <Marker
                key={sacList.fields.id}
                position={sacList.fields.location}
                icon={myIcon}
              >
                <Popup>
                  <p>Tri'Sac</p>
                  <p>
                    Adresse: {sacList.fields.numero} {sacList.fields.adresse}
                  </p>
                  <p>Commune: {sacList.fields.commune}</p>
                  <p>
                    {' '}
                    {filter.filter === 'Rendez vous Tri-sac 2020'
                      ? `Prochain rendez vous : ${sacList.fields.rdv4} `
                      : ''}
                  </p>
                  <p>
                    {' '}
                    {filter.filter === 'Rendez vous Tri-sac 2020'
                      ? `Heure de début : ${sacList.fields.hdebut4}`
                      : ''}
                  </p>
                  <p>
                    {' '}
                    {filter.filter === 'Rendez vous Tri-sac 2020'
                      ? `Heure de fin : ${sacList.fields.hfin4}`
                      : ''}
                  </p>
                  <p>
                    {' '}
                    {filter.filter === 'Rendez vous Tri-sac 2021'
                      ? `Prochain rendez vous : ${sacList.fields.rdv1} `
                      : ''}
                  </p>
                  <p>
                    {' '}
                    {filter.filter === 'Rendez vous Tri-sac 2021'
                      ? `Heure de début : ${sacList.fields.hdebut1}`
                      : ''}
                  </p>
                  <p>
                    {' '}
                    {filter.filter === 'Rendez vous Tri-sac 2021'
                      ? `Heure de fin : ${sacList.fields.hfin1}`
                      : ''}
                  </p>
                </Popup>
              </Marker>
            );
          })}
      </>
    );
  }
}

export default TriSac;

TriSac.propTypes = {
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
};
