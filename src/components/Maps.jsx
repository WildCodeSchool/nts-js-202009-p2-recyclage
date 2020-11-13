import React, { Component } from 'react';
import './Maps.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import TriSac from './TriSac';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 47.213792,
        lng: -1.555784,
      },
      zoom: 10,
    };
  }

  render() {
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
          <Marker position={this.state.location} icon={myIcon}>
            <Popup>ça marche</Popup>
          </Marker>
          <TriSac />
        </MapContainer>
      </div>
    );
  }
}

export default Maps;
