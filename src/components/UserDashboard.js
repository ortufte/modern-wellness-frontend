import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';


class UserDashboard extends React.Component {
    
    render() {
        return (
            <div className="user-dashboard">
                
                <Nav />
                <h2>Welcome { this.props.currentUser.data.attributes.name }</h2>

           </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(UserDashboard)