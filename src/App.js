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
import { createContext, useState } from 'react';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  <h1>{loggedInUser.name}</h1>
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <PrivateRoute path='/ticket-buy/:transportType'>
              <TransportType />
            </PrivateRoute>
            <Route path='/destination'>
              <DestinationMap />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
