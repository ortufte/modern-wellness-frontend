import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from './Nav'
import MedicineCabinet from './MedicineCabinet';
import LogList from './LogList';


const UserDashboard = ({ currentUser, match }) => {

    return (
        <div className="user-dashboard">

            <Nav match={match}/>

            <h2>Welcome { currentUser.data.attributes.name }</h2>
    
            <Route path={`${match.path}/medicine-cabinet`} component={MedicineCabinet}/>
            <Route path={`${match.path}/log-list`} component={LogList}/>

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(UserDashboard)