import {React} from 'react';
import { useSelector } from "react-redux";
import L from 'leaflet'
import { MapContainer, TileLayer, useMap} from 'react-leaflet';
import '../styles/LiveMap.css';
var lat = 47.667477;
var long = -117.409321; 
const radius = 200
var markers = {};
var circle;
var map;

export default function LiveMap() {
  const pois = useSelector((state) => state.pois)

  function restartSim(){
    clearInterval(interval);
    long = -117.409321;
    runSim();
  }

  var interval;
  function runSim(){
    interval = setInterval(update, 1000);
  }
  function update(){
      if(long > -117.396437){
          clearInterval(interval);
          return;
      }
      long += 0.000350;
      if (map.hasLayer(circle)){
        circle.remove();
      }
      circle = L.circle([lat, long], {
          color: 'red',
          radius: radius
      }).addTo(map);
      for(var i = 0; i < pois.length; i++){
        var poi = pois[i];
        var dist = map.distance(poi.latlng, circle.getLatLng());
        var inSide = dist < circle.getRadius();
        if(!inSide){
            markers[poi.id].remove();
            // var row = document.getElementById(poi.id);
            // row.style.display = 'none';
        }else{
            markers[poi.id].addTo(map);
            // var row = document.getElementById(poi.id);
            // row.style.display = '';
          }
      }
    }

  function MyComponent(){
    map = useMap();
    for(var i = 0; i < pois.length; i++){
      var poi = pois[i]
      markers[poi.id] = L.marker(poi.latlng).bindPopup(poi.name);
    }
    return null;
  }
  runSim();
  return (
    <>
      <div id='mapid'>
        <MapContainer center={[lat, long]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MyComponent/>
        </MapContainer>
      </div>
      <div id='Button'>
        <button onClick={restartSim}>Re-Run Sim</button>
      </div>
    </>
  );
}

