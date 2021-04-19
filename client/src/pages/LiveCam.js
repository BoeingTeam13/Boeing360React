import React, { useState } from 'react';
import '../styles/LiveCam.css';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import POITable from '../components/PoiTable';
import { viewer, Kaleidoscope } from 'kaleidoscopejs';

export default function LiveCamera() {
  const [isClicked, setClicked] = useState(true);
  const [btnText, setBtnText] = useState('Demo');
  const pois = useSelector(state => state.pois);

  // var viewer = new Kaleidoscope.Image({
  //   source: 'http://thiago.me/image-360/Polie_Academy_53.JPG',
  //   containerId: '#container360',
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });

  console.log('pois', pois);

  // Live-Stream / Demo Button
  const handleClick = () => {
    setClicked(!isClicked);
    changeBtnText();
  };

  const changeBtnText = () => {
    if (isClicked) {
      setBtnText('Live-Stream');
    } else {
      setBtnText('Demo');
    }
  };

  return (
    <div>
      <Container className='LiveCam__container'>
        <h1 style={{ textAlign: 'center' }}>Live-360</h1>

        <Row>
          <Col className='col-center'>
            <p><font size="+3">Dynamic POI Table</font></p> <POITable pois={pois} />
          </Col>
          <Col className='col-center'>
            {isClicked ? (
              <div>
                <p><font size="+3">Live Stream</font></p>
                <iframe
                  src='http://192.168.0.42:9001/'
                  frameBorder='1'
                  style={{ width: '675px', height: '375px' }}
                  title='Live-360-stream'
                ></iframe>
              </div>
            ) : (
              <div>
                <p><center>Demo</center></p>
                <div className='demo-demo'></div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='col-center'>
            <Button onClick={handleClick}>{btnText}</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
