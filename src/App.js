import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/homeImage.jpg'})`,
    backgroundSize: 'cover',
  }
}))

const App = () => {

  const classes = useStyles()

    return(
      <div className={classes.root}>
        <CssBaseline />
        <Home />
      </div>
    );
}

export default App;

