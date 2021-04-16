import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle} from 'react-leaflet';
import '../styles/LiveMap.css';

export default function LiveMap() {
  var lat = 47.667477;
  var long = -117.409321;
  const radius = 100
  const position = [47.6670, -117.4014];
  const circleStart = [lat, long]

  function moveRadius(){
    if(long > -117.396437){
      document.getElementById("Error").innerHTML = "You have walked all the way accross campus!!!";
      return;
  }
  long += 0.001000;
  }
  return (
    <div id='mapid'>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {moveRadius()}
        <Circle center={circleStart} radius={radius}/>
        <Marker position={position}>
          <Popup>
            Circle
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
