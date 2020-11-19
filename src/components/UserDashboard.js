import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav'
import MedicineCabinet from './MedicineCabinet';
import Logs from './Logs';
import Log from './Log';
import MedicineForm from './MedicineForm';
import Medicine from './Medicine';
import NewLog from './NewLog';
import EditLog from './EditLog'

const UserDashboard = ({ currentUser, match }) => {
    return (
      
        <div className="user-dashboard">

            <Nav match={match}/>
            <h2>Welcome {currentUser.data.attributes.name} </h2> 
            <Switch>
                <Route exact path={`${match.path}/logs/new`} component={NewLog}/>
                <Route path={`${match.path}/logs/:logId/edit`} component={EditLog}/>
                <Route path={`${match.path}/logs/:logId`} component={Log}/>
                <Route exact path={`${match.path}/logs`} component={Logs}/>
                <Route exact path={`${match.path}/medicine-cabinet/new`} component={MedicineForm}/>
                <Route path={`${match.path}/medicine-cabinet/:medicineId`} component={Medicine}/>
                <Route exact path={`${match.path}/medicine-cabinet`} component={MedicineCabinet}/>
            </Switch>

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
    }
}

export default connect(mapStateToProps)(UserDashboard)