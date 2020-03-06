import React, { useLayoutEffect, useState }  from 'react';
import { HexGrid, Layout, GridGenerator } from 'react-hexgrid';

import HexTile from './HexTile';

import './GridContainer.css';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const GridContainer = () => {
    const hexagons = GridGenerator.hexagon(1);
    const [width, height] = useWindowSize();

    return (
        <HexGrid className="gridContainer" width={width} height={height}>
            <Layout 
                size={{ x: 15, y: 15 }}
                spacing={1.1}>
                { hexagons.map((hex, i) => <HexTile key={i} id={i} q={hex.q} r={hex.r} s={hex.s} />) }
            </Layout>
        </HexGrid>
    );
}

export default GridContainer;

