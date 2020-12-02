import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@material-ui/core'
import { logout } from '../actions/currentUser'; 
import { connect } from 'react-redux'


const Nav = ({ match, logout, history }) => {

    const handleLogout = (event) => {
        event.preventDefault()
        logout()
        history.push('/')
    }

    return (
        
        <div className="navigation">
            <Button component={Link} to={`${match.url}/medicine-cabinet`}>
                <Typography variant="subtitle1" color="secondary">medicine cabinet | </Typography>
            </Button>
            <Button component={Link} to={`${match.url}/logs`}>
                <Typography variant="subtitle1" color="secondary">daily logs | </Typography>
            </Button>
            <Button component={Link} to={`${match.url}`}>
                <Typography variant="subtitle1" color="secondary">home | </Typography>
            </Button>
            <Button component={Link} to={`${match.url}/profile`}>
                <Typography variant="subtitle1" color="secondary">profile | </Typography>
            </Button>
            <Button onClick={handleLogout}>
                <Typography variant="subtitle1" color="secondary">logout</Typography>
            </Button>
        </div>

    )
}

export default connect(null, { logout })(Nav)
