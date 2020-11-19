
import React from 'react';
import { editLog } from '../actions/userLogs';
import LogForm from './LogForm';
import { connect } from 'react-redux';
import { setLogFormData } from '../actions/logForm';
import { useEffect } from 'react'

const EditLog = ({ history, editLog, match, userLogs, setLogFormData }) => {
    
    const logId = match.params.logId
    const log = userLogs.find(log => log.id === parseInt(logId))
   
    useEffect(() => {
        setLogFormData(log) 
    })

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

export default connect(mapStateToProps, { editLog, setLogFormData })(EditLog)