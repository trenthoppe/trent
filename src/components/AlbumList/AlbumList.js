import React from 'react';
import './AlbumList.css';

const AlbumList = props => {
    const albums = props.albums;

    return (
        <div >
            <h1>My Album Library</h1>
            <ul className="album-list">
                {albums.map((album) => {
                    return <li key={album.id}>{album.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default AlbumList;