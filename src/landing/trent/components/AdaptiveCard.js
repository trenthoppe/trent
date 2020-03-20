// React
import React, { useState } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar } from '@material-ui/core';
// React Spring
import {useSpring, animated} from 'react-spring'

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height:300,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  tile: {
    display: 'flex',
    objectFit: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height:300,
  },
  img: {
    maxHeight: '100%',
  }, 
  tileBar: {
    textAlign: 'center'
  }
}));

const AdaptiveCard = ({item, enterAnimation}) => {
  const [hovering, toggleHovering] = useState(false);
  const styles = useStyles();

  const {xy, op} = useSpring({
    from: { 
      xy: hovering ? [0, 200] : [0, 0],
      op: hovering ? 0 : 1
    },
    to: {
      xy: hovering ? [0, 0] : [0, 200],
      op: hovering ? 1 : 0
    }
  });

  const handleMouseHover = () => {
    toggleHovering(!hovering);
  };

  return (
    <GridListTile 
      className={styles.root} 
      key={item.id} 
      cols={item.cols || 1}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}>
      <animated.div
        className={styles.tile}
        style={enterAnimation}
        >
        <a href={item.url} target="_blank">
          <img 
            className={styles.img}
            src={item.img} 
            alt={item.title} />
        </a>
      </animated.div>
        <animated.div 
          style={{
            transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`), 
            opacity: op.interpolate(op => op)
          }}
          >
          <GridListTileBar
            className={styles.tileBar}
            title={item.title}
            subtitle={item.subtitle} 
          />
        </animated.div>
    </GridListTile>
  );
}

export default AdaptiveCard;
