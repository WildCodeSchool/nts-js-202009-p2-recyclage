import React, {Component} from 'react';
import './Maps.css';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 
'react-leaflet';




const myIcon = L.icon({
    iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/0/619.svg',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, 41]
})


class Maps extends Component {
    state = {
        lat: 47.213792,
        lng: -1.555784,
        zoom: 10,
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        

    return (
        <div className='maps'>
            <MapContainer className='map' center={position} 
zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://
osm.org/copyright">OpenStreetMap</a> 
contributors'
                    url="https://{s}.tile.openstreetmap.org/
{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        lol
                    </Popup>
                </Marker>
            </MapContainer> 
        
        </div>
    );
    }
}

export default Maps;