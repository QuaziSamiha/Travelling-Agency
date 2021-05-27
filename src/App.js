import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import DestinationMap from './components/DestinationMap/DestinationMap';
import TransportType from './components/TransportType/TransportType';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          {/* <Route path='/blog'>
            <Blog />
          </Route> */}
          <Route path='/ticket-buy/:transportType'>
            <TransportType />
          </Route>
          <Route path='/destination'>
            <DestinationMap />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
