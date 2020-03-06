import React, { useState } from 'react';
import './NewAlbum.css';

const NewAlbum = props => {
    const [enteredText, setEnteredText] = useState('');

    const addAlbumHandler = event => {
        event.preventDefault();
        const newAlbum = {
            id: Math.random().toString(),
            name: enteredText
        };
        props.onAddAlbum(newAlbum);
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-album" onSubmit={addAlbumHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add Album</button>
        </form>
    );
}

export default NewAlbum;