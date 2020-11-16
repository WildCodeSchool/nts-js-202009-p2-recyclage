import React, { Component } from 'react';
import './Maps.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import TriSac from './TriSac';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.213792,
      lng: -1.555784,
      zoom: 10,
    };
  }

  render() {
    // const position = [this.state.location.lat, this.state.location.lng];//
    const { lat, lng } = this.state;
    const { zoom } = this.state;
    const position = {
      lat,
      lng,
    };
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

          <TriSac />
        </MapContainer>
      </div>
    );
  }
}

export default Maps;
