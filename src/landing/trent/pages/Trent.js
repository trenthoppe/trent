// React
import React, { useState } from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
// Internal Components
import MyHeader from '../components/MyHeader';
import SelectorRow from '../components/SelectorRow';
import Collection from '../components/Collection';
// Content
import SELECTORS from '../content/SelectorsContent';
import COLLECTIONS from '../content/CollectionsContent';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FB9F89'
        },
        secondary: {
            main: '#1E1E24'
        },
        light: {
            main: '#FB9F89'
        },
        dark: {
            main: '#373F51'
        }
    },
    typography: {
        fontFamily: 'Airbnb Cereal App Book',
        selector: {
            fontSize: 30
        }
    }
});

const useStyles = makeStyles({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "4vh",
        backgroundColor: theme.palette.primary.main,
        display: 'inline-block'
    }, 
    headerContainer: {
        flex: .1
    },
    selectorRowContainer: {
        flex: .1
    },
    collectionContainer: {
        flex: .5,
        paddingTop: '2vh',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Trent = () => {
    const [currentCollection, setCollection] = useState(COLLECTIONS["Albums"]);
    const styles = useStyles();

    const handleUpdateCollection = (collectionKey)=> {
        console.log(collectionKey);
        if (COLLECTIONS[collectionKey]) {
            setCollection(COLLECTIONS[collectionKey]);
        } else {
            console.log("Collection key not found: " + collectionKey);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid 
                container
                className={styles.container}
                direction="column"
                spacing={0}>
                <Grid container item xs={12} className={styles.headerContainer}>
                    <MyHeader />
                </Grid>
                <Grid container item xs={12} className={styles.headerContainer}>
                    <SelectorRow selectors={SELECTORS} updateSelected={handleUpdateCollection}/>
                </Grid>
                <Grid container item xs={12} className={styles.collectionContainer} zeroMinWidth spacing={0}>
                    <Collection items={currentCollection}/>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}

export default Trent;

