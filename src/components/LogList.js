import React from 'react';
import { connect } from 'react-redux'

const LogList = ({ currentUser } ) => {
    
    //in here I'm goign to have to call getUserLogs from logs action creator file

    const logsJSX = currentUser.data.attributes.logs.map(log => <li key={ log.id }> { log.date } </li>)

    return (
        <div className="logs">

            <h1> LogList </h1>

            { logsJSX }

            {/* <Link to="/logs/new">New Log</Link> */}
            
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(LogList)