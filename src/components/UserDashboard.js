import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Nav from './Nav'
import MedicineCabinet from './MedicineCabinet';
import Logs from './Logs';
import Profile from './Profile'
import Log from './Log';
import Medicine from './Medicine';
import ProtectedRoute from './ProtectedRoute';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    userDashboard: {
        backgroundSize: 'cover',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/userDashboardImage.jpeg'})`,
        height: '100vh',
        display: "flex",
        alignItems: "center",
      },
      paper: {
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0, 0.5)',
      },
  }))

const UserDashboard = ({ currentUser, match, history }) => {

    const classes = useStyles()

    return (
      
        <div className={classes.userDashboard}>

            <Grid container
                spacing="8"
                direction="column"
                justify="flex-start"
                alignItems="stretch"
            >
                <Grid item  >
                    <Paper className={classes.paper}>
                        <Nav match={match} history={history}/>
                    </Paper>
                </Grid>
                
                <Grid item >
                    <Paper className={classes.paper} >
                 
                        <Switch>
                            <ProtectedRoute path={`${match.path}/logs/:logId`} component={Log}/>
                            <ProtectedRoute exact path={`${match.path}/logs`} component={Logs}/>
                            <ProtectedRoute path={`${match.path}/medicine-cabinet/:medicineId`} component={Medicine}/>
                            <ProtectedRoute exact path={`${match.path}/medicine-cabinet`} component={MedicineCabinet}/>
                            <ProtectedRoute exact path={`${match.path}/profile`} component={Profile}/>
                        </Switch>
       
                    </Paper>
                </Grid>

            </Grid>

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
    }
}

export default connect(mapStateToProps)(UserDashboard)