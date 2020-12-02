import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import SignUp from './SignUp';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
        // position: 'absolute'
    },
}))

const HomeNav = () => {

    const classes = useStyles()
    
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <SignUp />
                    <Login />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HomeNav
