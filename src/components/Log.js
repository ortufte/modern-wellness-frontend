import React from 'react';
import { connect } from 'react-redux';
import { deleteLog } from '../actions/userLogs';

const Log =  (props) => {

    const logInfo = props.location.state.log

    return (
        <div className="log">
            <h3>Log Component</h3>
            <p>Date: {logInfo.date}</p>
            <p>Medicine: {logInfo.medicine}</p>
            <p>Symptom Level: {logInfo.symptom_level}</p>
            <p>Note: {logInfo.note}</p>
            <button onClick={() => props.deleteLog(logInfo.id, logInfo.user_id, props.history)}>Delete Log</button>
        </div>
    ) 
}

export default connect(null, { deleteLog })(Log)