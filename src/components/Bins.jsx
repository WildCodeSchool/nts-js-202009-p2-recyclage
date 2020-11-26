import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Maps.css';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

class Bins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binsList: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/?', {
        params: {
          dataset: '244400404_colonnes-aeriennes-nantes-metropole',
          rows: 1000,
          apikey: '5f0a64b92cf369cddcf2977da97cfad9b6aac115497c3cdbb8a624b5',
        },
      })
      .then((response) => {
        this.setState({
          binsList: response.data.records,
        });
      });
  }

  render() {
    const { binsList } = this.state;
    const { filter } = this.props;
    const myIcon = new L.Icon({
      iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -10],
    });
    return (
      <>
        {binsList
          .filter((filterBins) => {
            if (filterBins.fields.type_dechet === filter.filter) {
              return true;
            }
            if (filter.filter === 'Colonnes aériennes') {
              return true;
            }
            return false;
          })
          .map((bins) => {
            return (
              <Marker
                key={bins.fields.id_colonne}
                position={bins.fields.geo_point_2d}
                icon={myIcon}
              >
                <Popup>
                  <p>Colonnes aériennes</p>
                  <p>
                    {filter.filter === 'Colonnes aériennes'
                      ? ''
                      : `Type de déchet à recycler : ${filter.filter}`}
                  </p>
                  <p>Commune: {bins.fields.commune}</p>
                  <p>Adresse: {bins.fields.adresse}</p>
                </Popup>
              </Marker>
            );
          })}
      </>
    );
  }
}

export default Bins;

Bins.propTypes = {
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
};
