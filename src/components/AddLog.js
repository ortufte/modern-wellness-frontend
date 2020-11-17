
import React from 'react';
import { createLog } from '../actions/userLogs';
import LogForm from './LogForm';
import { connect } from 'react-redux';

const AddLog = ({ history, createLog }) => {

    const handleSubmit = (logFormData, userId) => {
        createLog(logFormData, userId, history)
      }


    return (
        <div className="addLog">
            <h1> Create Log </h1>
            <LogForm 
                buttonLabel="Create Log" 
                handleLogForm={handleSubmit}
            />
        </div>
    )
}

export default connect(null, { createLog })(AddLog)