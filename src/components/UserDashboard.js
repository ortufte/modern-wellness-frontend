import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from './Nav'
import MedicineCabinet from './MedicineCabinet';
import Logs from './Logs';


const UserDashboard = ({ currentUser, match }) => {

    return (
      
        <div className="user-dashboard">

            <Nav match={match}/>
            { currentUser ? <h2>Welcome {currentUser.data.attributes.name} </h2> : null }
            <Route path={`${match.path}/medicine-cabinet`} component={MedicineCabinet}/>
            <Route path={`${match.path}/logs`} component={Logs}/>

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(UserDashboard)