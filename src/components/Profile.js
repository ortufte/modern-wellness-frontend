import React from 'react';
import { connect } from 'react-redux';
import EditProfile from './EditProfile';
import { Typography } from '@material-ui/core';

const Profile = ({ currentUser }) => {

    return (
        <div className="profile">
            <Typography variant="h3" color="secondary" style={{padding: 20}}>Your Profile</Typography>
            <br></br>
            <Typography variant="h4" color="secondary">name: {currentUser ? currentUser.data.attributes.name : ""} </Typography>
            <Typography variant="h4" color="secondary">currently tracking symptoms for: {currentUser ? currentUser.data.attributes.affliction : ""} </Typography>
            <EditProfile />
        </div>
    )

}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}
export default connect(mapStateToProps)(Profile)