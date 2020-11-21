import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        // centers horizontally
        alignItems: "center",
        height: '100vh',
        // these two center node center vertically
    },
    appbar: {
         background: 'none',
         fontFamily: "Montserrat",
         fontSize: '1rem',
         position: 'absolute',
         right: '0px', 
         color: '#972e0e'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
        // margin causes the appbarWrapper to be centered
    },
    // appbarTitle: {
    //     flexGrow: '1'
    //     // this pushes h1 and breadcrumbs components to the sides of the window
    // },
    title: {
        fontFamily: "Sail",
        fontSize: '8rem',
        color: 'white',
        margin: '0 auto'
    },
    text: {
        fontFamily: "Montserrat",
        fontSize: '2rem',
        margin: '0 auto',
        color: 'white'
    }
  }))

const HomeNav = () => {

    const classes = useStyles()

    return (
        
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper} >
                    {/* toolbar is already flexed */}
                {/* <h1 className={classes.appbarTitle}>eudaimonia</h1> */}
                <Breadcrumbs aria-label="breadcrumb" className={classes.appbar}>
                    <Link color="primary" href="/signup" >sign up</Link>
                    <Link color="primary" href="/login" >login</Link>
                </Breadcrumbs>
                </Toolbar>
            </AppBar>
            <div>
                <h1 className={classes.title}>eudaimonia</h1>
                <div >
                <p className={classes.text}>(n.) lit. "human flourishing";</p>
                <p className={classes.text}>a contented state of being</p>
                <p className={classes.text}>healthy, happy, and prosperous.</p>
                </div>
            </div>
        </div>

    )
}

export default HomeNav
