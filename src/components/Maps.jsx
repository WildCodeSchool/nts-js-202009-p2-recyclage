import React, { Component } from 'react';
import axios from 'axios';
import './Maps.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 47.213792,
        lng: -1.555784,
      },
      triSacList: [],
      zoom: 10,
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
    const position = [this.state.location.lat, this.state.location.lng];
    const myIcon = new L.Icon({
      iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -10],
    });
    const { zoom } = this.state;
    return (
      <div className="maps">
        <MapContainer className="map" center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://
osm.org/copyright">OpenStreetMap</a> 
contributors'
            url="https://{s}.tile.openstreetmap.org/
{z}/{x}/{y}.png"
          />

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
        </MapContainer>
      </div>
    );
  }
}

export default Maps;
