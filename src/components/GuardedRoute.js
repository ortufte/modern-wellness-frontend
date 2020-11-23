import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const GuardedRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        currentUser ? <Component {...props} /> : <Redirect to='/' />
    )} />
)

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}


export default connect(mapStateToProps)(GuardedRoute);