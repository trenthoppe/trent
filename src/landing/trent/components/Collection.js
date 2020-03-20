// React
import React from 'react';
// Material UI
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
// React Spring
import { useTrail } from 'react-spring';
// Internal
import AdaptiveCard from './AdaptiveCard';
// Content
import kitten from '../../../assets/images/kitten.jpg';
import kittens from '../../../assets/images/kittens.jpg';

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



const tileData = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

const Collection = ({items}) => {
    const styles = useStyles();
    const trail = useTrail(items.length, {
        from: { 
            opacity: 0, 
            transform: 'scale(0)'
        },
        to: {
            opacity: 1,
            transform: 'scale(1)'
        }
    }); 

    return (
        <div className={styles.root}>
            <GridList 
                cellHeight={160} 
                className={styles.gridList} 
                cols={4}>
                {console.log(items)}
                {trail.map(({...rest}, index) => (
                    <AdaptiveCard key={index} item={items[index]} enterAnimation={{...rest}}/>
                ))}
            </GridList>
        </div>
    );
}

export default Collection;