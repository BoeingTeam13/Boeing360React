import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Col, Row, Container } from 'react-bootstrap';
import POITable from '../components/PoiTable';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import '../styles/LiveMap.css';

var lat = 47.667477;
var long = -117.409321;
const radius = 200;
var markers = {};
var circle;
var map;

export default function LiveMap() {
  const pois = useSelector(state => state.pois);
  var interval;

  // Slider value state
  const [sliderValue, setSliderValue] = useState(240);

  function restartSim() {
    clearInterval(interval);
    long = -117.409321;
    runSim();
  }

  function runSim() {
    interval = setInterval(update, 1000);
  }

  function update() {
    if (long > -117.396437) {
      clearInterval(interval);
      return;
    }
    long += 0.00035;
    if (map.hasLayer(circle)) {
      circle.remove();
    }
    circle = L.circle([lat, long], {
      color: 'red',
      radius: sliderValue,
    }).addTo(map);
    for (var i = 0; i < pois.length; i++) {
      var poi = pois[i];
      var dist = map.distance(poi.latlng, circle.getLatLng());
      var inSide = dist < circle.getRadius();
      if (!inSide) {
        markers[poi.id].remove();
        // var row = document.getElementById(poi.id);
        // row.style.display = 'none';
      } else {
        markers[poi.id].addTo(map);
        // var row = document.getElementById(poi.id);
        // row.style.display = '';
      }
    }
    console.log('Update');
  }

  function MyComponent() {
    map = useMap();
    for (var i = 0; i < pois.length; i++) {
      var poi = pois[i];
      markers[poi.id] = L.marker(poi.latlng).bindPopup(poi.name);
    }
    return null;
  }

  function valuetext(value) {
    return `${value} meters`;
  }

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    event.preventDefault();
  };

  return (
    <>
      <Container className='live-map-container'>
      <h1 style={{ textAlign: 'center' }}>Live Map</h1>
        <Row>
          <Col>
          <p><font size="+3">Dynamic POI Table</font></p> <POITable pois={pois} />
          </Col>
          <Col>
          <p><center><font size="+3">Live Stream</font></center></p>
            <div id='mapid' style={{ marginTop: '14rem' }}>
              <MapContainer center={[lat, long]} zoom={14}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <MyComponent />
              </MapContainer>
            </div>
          <Row style={{ marginTop: '0rem' }}>
            <div id='Button' className='mapControls'>
              <Button
                className='simBtn1'
                variant='contained'
                color='primary'
                onClick={restartSim}
              >
                Run Sim
              </Button>

              <p style={{ marginTop: '1rem' }}>Search Radius: {sliderValue} meters</p>

              <Slider
                defaultValue={240}
                getAriaValueText={valuetext}
                aria-labelledby='discrete-slider-small-steps'
                step={20}
                marks
                min={200}
                max={600}
                valueLabelDisplay='auto'
                style={{ marginTop: '2rem' }}
                value={typeof sliderValue === 'number' ? sliderValue : 0}
                onChange={handleSliderChange}
              />
            </div>
          </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
