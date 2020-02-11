import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import AlbumList from './components/AlbumList/AlbumList';
import NewAlbum from './components/NewAlbum/NewAlbum';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import RunawayResume from './landing/pages/RunawayResume';
import UserPlaces from './places/pages/UserPlaces';
import Users from './user/pages/Users';

function App() {
  const [albums, setAlbums] = useState([
      {id: 1, name: "Album 1"},
      {id: 2, name: "Album 2"},
      {id: 3, name: "Album 3"}
  ]);

  const addNewAlbumHandler = newAlbum => {
    setAlbums(prevAlbums => prevAlbums.concat(newAlbum));
  };

  const LandingContainer = () => (
    <React.Fragment>
      <Route path="/" render={() => <Redirect to="/resume" />}/>
      <Route path="/resume" component={RunawayResume} />
    </React.Fragment>
  );

  const TestAppContainer = () => (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/test" exact>
            <Users />
          </Route>
          <Route path="/test/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/test/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/test" />
        </Switch>
      </main>
    </React.Fragment>
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/test" component={TestAppContainer} />
        <Route component={LandingContainer} />
      </Switch>
    </Router>
  );
}

export default App;
