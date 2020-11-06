import React from 'react'
import { NavLink } from 'react-router-dom';
import Logout from './Logout';


const Nav = ({ loggedIn }) => {
    return (
        <div className="navigation">
            <NavLink to="/medicine-cabinet">Medicine Cabinet</NavLink>
            <NavLink to="/logs">Log List</NavLink>
            <br></br>
            <Logout />
   
        </div>
    )
}

export default Nav
