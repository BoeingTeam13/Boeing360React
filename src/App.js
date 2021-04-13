import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import LiveMap from './pages/LiveMap';
import LiveCam from './pages/LiveCam';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/live-cam' exact component={LiveCam} />
        <Route path='/live-map' exact component={LiveMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
