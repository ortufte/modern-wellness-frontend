import React from 'react';
import HomeNav from './HomeNav';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/homeImage.jpg'})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 'auto'
      },
  }))

const Home = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
   
            <HomeNav />
            <div>
                <Typography variant="h1" color="secondary">eudaimonia</Typography>
                <Typography variant="subtitle1" color="secondary">(n.) lit. "human flourishing";</Typography>
                <Typography variant="subtitle1" color="secondary">a contented state of being</Typography>
                <Typography variant="subtitle1" color="secondary">healthy, happy, and prosperous.</Typography>
            </div>

        </div> 

    )
}

  export default Home;