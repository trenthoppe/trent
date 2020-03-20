import React from 'react'
import { Hexagon, Text } from 'react-hexgrid';
import { MdBook } from 'react-icons/md';

import './HexTile.css';

const HexTile = ({id, q, r, s, name, icon})  => {
    
    const stateNameAndBusiness = () => {
        console.log(id);
    };

    return (
        <Hexagon 
            className="hex-tile" 
            key={id} 
            q={q} 
            r={r} 
            s={s}
            onClick={stateNameAndBusiness}>
            <MdBook className="icon" color={"white"} size={5} />
            <Text>{name}</Text>
        </Hexagon>
    );
}

export default HexTile;