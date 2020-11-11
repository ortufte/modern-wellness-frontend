import React from 'react'
import { NavLink } from 'react-router-dom';
import Logout from './Logout';


const Nav = ({ match }) => {

    return (
        
        <div className="navigation">
            <NavLink to={`${match.url}/medicine-cabinet`}>Medicine Cabinet</NavLink>
            <NavLink to={`${match.url}/logs`}>Logs</NavLink>
            <Logout />
        </div>

    )
}

export default Nav
