import React, { useState } from 'react';
import '../styles/LiveCam.css';
import Button from 'react-bootstrap/Button';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { kaleidoscopejs as Kaleidoscope } from 'kaleidoscopejs';

// const viewer = new Kaleidoscope.Video({
//   source: 'equirectangular-video.mp4',
//   containerId: '#target',
// });

export default function LiveCamera() {
  const [isClicked, setClicked] = useState(false);
  const [btnText, setBtnText] = useState('Demo');

  // var viewer = new Kaleidoscope.Video({
  //   source: 'equirectangular-video.mp4',
  //   containerId: '#target',
  // });
  // viewer.render();

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

  // const displayDemo = () => {
  //   var containerSelector = '#container360';
  //   this.viewer = new Video({
  //     source: '/videos/testVideo.mp4',
  //     containerId: containerSelector,
  //     // Change the following line from height: window.innerHeight | width: window:innderWidth
  //     height: 700,
  //     width: 1000,
  //   });
  //   this.viewer.render();
  //   window.onresize = function () {
  //     // Change the following line from height: window.innerHeight | width: window:innderWidth
  //     this.viewer.setSize({
  //       height: 700,
  //       width: 1000,
  //     });
  //   }.bind(this);
  //   document
  //     .querySelector(containerSelector)
  //     .addEventListener('touchend', this.viewer.play.bind(this.viewer));
  //   document.body.addEventListener(
  //     'click',
  //     function () {
  //       this.viewer.play();
  //     }.bind(this)
  //   );
  // };

  return (
    <div>
      <Container className='LiveCam__container'>
        <h1 style={{ textAlign: 'center' }}>Live-360</h1>

        <Row>
          <Col className='col-center'>
            <p>Dynamic POI Table</p>{' '}
            <table>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <th>Description:</th>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className='col-center'>
            {isClicked ? (
              <div>
                <p>Live Stream</p>
                <iframe
                  src='http://192.168.0.42:9001/'
                  frameBorder='1'
                  style={{ width: '675px', height: '375px' }}
                  title='Live-360-stream'
                ></iframe>
              </div>
            ) : (
              <div>
                <p>Demo</p>
                {/* {viewer.render()} */}
                {/* <script>{displayDemo(View)}</script>
                <div id='container360'>
                  <canvas width='0' height='0'></canvas>
                </div> */}
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
