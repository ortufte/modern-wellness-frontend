import React from 'react';
import { connect } from 'react-redux';
import { deleteLog } from '../actions/userLogs';
import { Link } from 'react-router-dom'


const Log =  (props) => {

    const logId = props.match.params.logId
    const log = props.userLogs.find(log => log.id === parseInt(logId))

    return (
        <div className="log">
            <h3>Log Component</h3>
            <p>Date: {log ? log.date : ""}</p>
            <p>Medicine: {log ? log.medicine : ""}</p>
            <p>Symptom Level: {log ? log.symptom_level : "" }</p>
            <p>Note: {log ? log.note : ""}</p>
            <button onClick={() => props.deleteLog(log.id, log.user_id, props.history)}>Delete Log</button>
            <Link to={`${props.match.url}/edit`}>Edit Log</Link> 

        </div>
    ) 
}

const mapStateToProps = ({ userLogs }) => {
    return {
        userLogs
    }
}

export default connect(mapStateToProps, { deleteLog })(Log)