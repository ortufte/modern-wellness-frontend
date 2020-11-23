import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import SignUp from './SignUp';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    appbar: {
         background: 'none',
         fontFamily: "Montserrat",
         fontSize: '1rem',
         position: 'absolute',
         right: '0px', 
         color: 'white'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
        // margin causes the appbarWrapper to be centered
    },
}))

const HomeNav = () => {

    const classes = useStyles()

    return (
        
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper} >
                {/* <Breadcrumbs aria-label="breadcrumb" className={classes.appbar}>
                    <Link color="secondary" href="/signup" >sign up</Link>
                    <Link color="secondary" href="/login" >login</Link>
                </Breadcrumbs> */}

                <SignUp />
                <Login />
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default HomeNav
