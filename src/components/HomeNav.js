import React from 'react'
import Login from './Login';
import SignUp from './Signup';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
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
