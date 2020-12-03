import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute =({component: Component, currentUser, ...rest}) => {

        return (
        
          <Route
            {...rest}
            render={(props) => currentUser 
              ? 
              // console.log("current user")
              <Component {...props} />
              : 
              // console.log("no current user")
              <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }/>
        )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(ProtectedRoute);

