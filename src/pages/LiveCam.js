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
  console.log('hello im eric')
  const [isClicked, setClicked] = useState(false);
  const [btnText, setBtnText] = useState('Demo');

  //let module = require('../App.js')
  //var locations = module.locations;

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

  const locations = [
    {
      id: '1',
      name: 'Hemmingson Center',
      latlng: [47.6671, -117.3996],
      description: ['Main activity center for Gonzaga University'],
      link: ['https://www.gonzaga.edu/about/offices-services/gonzaga-university-event-service-team/venues/john-j-hemmingson-center']
    },
    {
      id: '2',
      name: 'McCarthy Center',
      latlng: [47.6653, -117.3991],
      description: ['Gonzaga University Athletic and Gym Center'],
      link: ['https://gozags.com/facilities/mccarthey-athletic-center/1']
    },
    {
      id: '3',
      name: 'Zag Shop',
      latlng: [47.6677, -117.3977],
      description: ['Official Gonzaga University Store'],
      link: ['https://www.bkstr.com/gonzagazagshopstore/home']
    }
  ];
  
  //experimenting with locations with logs
  var add_array = []
  console.log(locations.forEach(function(item, index, array) {
    var arr = Object.values(item);
    add_array.push(arr)
    console.log('name:' + arr[1], index)
    console.log('description:' + arr[3], index)
    console.log('link:' + arr[4], index)
  }));
  console.log(add_array)
  const showPOI = () => {
      console.log('I was triggered during render')
  };

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < locations.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
    var poi = locations[i];

    for (var j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cell2 = document.createElement("td");
      var cellText = document.createTextNode("Name: "+poi.name);
      var cellText3 = document.createTextNode("\nLink: " + poi.link + "\n")
      if(j === 1)
        cell.appendChild(cellText);
      if(j === 2)
        cell2.appendChild(cellText3);
      row.appendChild(cell);
      row.appendChild(cell2);
    }
    var cellText2 = document.createTextNode("\nDescription: "+poi.description)
    cell.append(cellText2);
    
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

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
            <Button onClick={generate_table}></Button>
            <table>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <th>Description:</th>
                  {/* <th>Link:</th> */}
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