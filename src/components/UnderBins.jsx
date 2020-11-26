import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Maps.css';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

class UnderBins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      underBinsList: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/?', {
        params: {
          dataset: '244400404_colonnes-enterrees-nantes-metropole',
          rows: 1000,
          apikey: '5f0a64b92cf369cddcf2977da97cfad9b6aac115497c3cdbb8a624b5',
        },
      })
      .then((response) => {
        this.setState({
          underBinsList: response.data.records,
        });
      });
  }

  render() {
    const { underBinsList } = this.state;
    const { filter } = this.props;
    const myIcon = new L.Icon({
      iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -10],
    });
    return (
      <>
        {underBinsList
          .filter((bin) => {
            // faire un filter sur underbinslist en se basant sur un filter recu des props
            if (bin.fields.type_dechet === filter.filter) {
              return true;
            }
            if (filter.filter === 'Colonnes enterrées') {
              return true;
            }
            return false;
          })
          .map((underBins) => {
            return (
              <Marker
                key={underBins.fields.id_colonne}
                position={underBins.fields.geo_point_2d}
                icon={myIcon}
              >
                <Popup>
                  <p>Colonnes enterrées</p>
                  <p>
                    {filter.filter === 'Colonnes enterrées'
                      ? ''
                      : `Type de déchet à recycler : ${filter.filter}`}
                  </p>
                  <p>Commune: {underBins.fields.commune}</p>
                  <p>Adresse: {underBins.fields.adresse}</p>
                </Popup>
              </Marker>
            );
          })}
      </>
    );
  }
}

export default UnderBins;

UnderBins.propTypes = {
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
};
