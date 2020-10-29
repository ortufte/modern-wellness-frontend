import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser' //- login action from currentuser actions

const Logout = ({ logout } )  => { 
    
    return (
        <button className="logout" onClick={logout}>Logout</button>
    )
}


export default connect(null, { logout })(Logout);