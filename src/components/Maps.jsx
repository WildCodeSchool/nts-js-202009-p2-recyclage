import React, { Component } from 'react';
import './Maps.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import TriSac from './TriSac';
import UnderBins from './UnderBins';
import Bins from './Bins';

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
    const { lat, lng } = this.state;
    const { zoom } = this.state;
    const filter = this.props;
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

          <TriSac filter={filter} />
          <UnderBins filter={filter} />
          <Bins filter={filter} />
        </MapContainer>
      </div>
    );
  }
}

export default Maps;
