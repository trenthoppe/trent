// React
import React from 'react';
// Material UI
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// React Spring
import {useSpring, animated, config} from 'react-spring'

// Styles
const useStyles = makeStyles({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: '37px'
    }
});

// Component
const TrentHeader = () => {
    const styles = useStyles();

    const {xy, op} = useSpring({
        config: config.gentle,
        from: { 
            xy: [200, 0],
            op: 0
        },
        to: {
            xy: [0, 0],
            op: 1
        }
    });

    return (
        <animated.div 
            className={styles.root}
            style={{
                transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`), 
                opacity: op.interpolate(op => op)
            }}>
            <Typography
                className={styles.header} 
                color="secondary">
                Hi, I'm Trent
            </Typography>
        </animated.div> 
    );
}

export default TrentHeader;

