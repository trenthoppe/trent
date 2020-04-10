// React
import React, { useEffect, useState } from 'react';
// Material UI
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
// React Spring
import { useTrail } from 'react-spring';
// Internal
import AdaptiveCard from './AdaptiveCard';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
    },
    gridList: {
        width: 1200,
        height: 750,
    },
    item: {
            width: 300,
            height:300,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
    },
}));

const Collection = ({items}) => {
    const styles = useStyles();
    const trailAnimation = {
        from: { 
            opacity: 0, 
            transform: 'scale(0)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        },
        reset: true
    };

    const [trail, set, stop] = useTrail(items.length, () => (trailAnimation)); 

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        if (mounted) {
            set(trailAnimation);
        }
        
        return () => { 
            stop();
            setMounted(false);
        };
    }, [items]);

    return (
        <div className={styles.root}>
            <GridList 
                cellHeight={160} 
                className={styles.gridList} 
                cols={4}>
                {trail.map(({...rest}, index) => (
                    <AdaptiveCard key={parseInt(Math.random() * 1000)} item={items[index]} enterAnimation={{...rest}}/>
                ))}
            </GridList>
        </div>
    );
}

export default Collection;