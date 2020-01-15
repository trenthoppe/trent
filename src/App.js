import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import AlbumList from './components/AlbumList/AlbumList';
import NewAlbum from './components/NewAlbum/NewAlbum';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  const [albums, setAlbums] = useState([
      {id: 1, name: "Album 1"},
      {id: 2, name: "Album 2"},
      {id: 3, name: "Album 3"}
  ]);

  const addNewAlbumHandler = newAlbum => {
    setAlbums(prevAlbums => prevAlbums.concat(newAlbum));
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
