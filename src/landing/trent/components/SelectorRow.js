import React, { useState } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// React-Spring
import { useTrail, animated, config } from 'react-spring'
// Internal
import Selector from './Selector';

const useStyles = makeStyles({
    selector_row: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const SelectorRow = ({ selectors, updateSelected }) => {
    const [selected, setSelected]= useState(selectors[0].id);
    const { selector_row } = useStyles();

    const trail = useTrail(selectors.length, {
        config: config.gentle,
        opacity: 1,
        x: 0,
        from: { 
            opacity: 0, 
            x: -20, 
        },
    });

    const selectHandler = (id) => {
        setSelected(id);
        updateSelected(selectors[id].name);
    };

    return (
        <Grid container 
            direction="row" 
            className={selector_row} 
            spacing={3}>
            {trail.map(({ x, height, size, ...rest }, index) => (
                <Grid item key={selectors[index].id}>
                    <animated.div
                        key={selectors[index].id}
                        style={{ 
                            ...rest, 
                            transform: x.interpolate(x => `translate3d(0,${x}px,0)`) 
                        }}>
                        <Selector
                            id={selectors[index].id} 
                            name={selectors[index].name}
                            isSelected={selected === selectors[index].id}
                            select={selectHandler}/>
                    </animated.div>
                </Grid>                      
            ))}  
        </Grid>
    );
}

export default SelectorRow;

