import React from 'react';
import { addLog } from '../actions/userLogs';
import LogForm from './LogForm';
import { connect } from 'react-redux';

const AddLog = (logFormData) => {

    const handleSubmit = (logFormData) => {
        addLog(logFormData)
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

export default connect(null, { addLog })(AddLog)