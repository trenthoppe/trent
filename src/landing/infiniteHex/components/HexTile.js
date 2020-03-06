import React from 'react'
import { Hexagon, Text } from 'react-hexgrid';

import './HexTile.css';

const HexTile = props => {

    return (
        <div className="hex-tile">
            <div className="flipper">
                <Hexagon className="front" key={props.id} q={props.q} r={props.r} s={props.s}>
                    <Text>{"Front"}</Text>
                </Hexagon>
                <Hexagon className="back" key={props.id+10} q={props.q} r={props.r} s={props.s}>
                    <Text>{"Back"}</Text>
                </Hexagon>
            </div>
        </div>
    );
}

export default HexTile;