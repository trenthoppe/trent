import React, { useState } from 'react';
import './App.css';

import AlbumList from './components/AlbumList/AlbumList'
import NewAlbum from './components/NewAlbum/NewAlbum';

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
    <div className="App">
      <header className="App-header">
        <p>
          Hello friend! Hang tight, updates are coming soon.
        </p>
      </header>
      <NewAlbum onAddAlbum={addNewAlbumHandler}/>
      <AlbumList albums={albums}/>
    </div>
  );
}

export default App;
