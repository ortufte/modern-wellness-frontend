
import React from 'react';
import { editLog } from '../actions/userLogs';
import LogForm from './LogForm';
import { connect } from 'react-redux';

const EditLog = ({ history, editLog, match, userLogs }) => {

    const logId = match.params.logId
    const log = userLogs.find(log => log.id === parseInt(logId))

    const handleSubmit = (logFormData, userId) => {
        editLog(logFormData, userId, history, logId )
        }

    return (
        <div className="editLog">
            <h1> Edit Log </h1>
            <LogForm 
                buttonLabel="Edit Log" 
                handleLogForm={handleSubmit}
            />
        </div>
    )
}

const mapStateToProps = ({ userLogs }) => {
    return {
    userLogs
    }
}

export default connect(mapStateToProps, { editLog })(EditLog)