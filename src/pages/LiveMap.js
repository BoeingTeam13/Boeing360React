import {React, useState} from 'react';
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup, Circle} from 'react-leaflet';
import '../styles/LiveMap.css';

export default function LiveMap() {
  var lat = 47.667477;
  var long = -117.409321;
  const radius = 100
  const position = [47.6670, -117.4014];
  const circleStart = [lat, long]
  const pois = useSelector((state) => state.pois)
  return (
    <div id='mapid'>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={circleStart} radius={radius}/>
        {pois.map((poi)=> (
          <Marker hey={poi.id} position={poi.latlng}>
            <Popup>
              <p>{poi.name}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
