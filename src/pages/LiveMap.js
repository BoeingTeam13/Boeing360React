import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/LiveMap.css';

export default function LiveMap() {
  const position = [47.6670, -117.4014];
  return (
    <div id='mapid'>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Here
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
