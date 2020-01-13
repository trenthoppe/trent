import React from 'react';
import './Album.css';

const Album = props => {
    const albums = props.albums; 
    return (
        <div className="album">
            <h2>My Album Library</h2>
            <ul>
                {albums.map((album) => {
                    return <li key={album.key}>{album.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default Album;