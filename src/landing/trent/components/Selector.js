// React
import React from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(props => ({
    selectorBase: props => ({
        borderRadius: '50px',
        width: 100,
        height: 35,
        fontSize: 14,
        background: props.isSelected ? 
            props.theme.palette.secondary.main
            : props.theme.palette.primary.main,
        color: props.isSelected ? 
            props.theme.palette.primary.main 
            : props.theme.palette.secondary.main,
        '&:hover': { 
            background: props.isSelected ?
                props.theme.palette.secondary.light
                : props.theme.palette.primary.light
        },
    }),
}));

const Selector = ({ id, name, isSelected, select }) => {
    const theme = useTheme();
    const styles = useStyles({ isSelected, theme });

    const selectedHandler = () => {
        select(id);
    }

    return (
        <Button 
            classes={{root: styles.selectorBase}}
            variant={isSelected ? "contained" : "outlined"}
            onClick={selectedHandler}>
            {name}
        </Button>
    );
}

export default Selector;

