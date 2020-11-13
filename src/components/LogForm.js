import React from 'react';
import { connect } from 'react-redux';
// 1. We grab the action creator - (below)
import { updateNewLogForm } from '../actions/newLogForm';
import { createLog } from '../actions/userLogs';
// 3. Redux gives us back a prop called updatenNewLogForm
// which when invoked actually redux will dispatch (back to action creator, 
// then to reducer switch with data)
const LogForm = ({ logFormData, updateNewLogForm, createLog, userId, history, resetNewLogForm }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...logFormData, 
            [name]:value
        }
    // 4. This is not an invocation of just the action creator
    // it's now Redux dispatching the action creator with the 
    // appropriate arguments. (below)
        updateNewLogForm(updatedFormInfo)
    }

    const handleNewLog = event => {
        event.preventDefault()
        createLog(logFormData, userId, history)
    }

    return (
        <div className="log-form">
            <form className="log-form" onSubmit={handleNewLog}>
                <input 
                    type="text" 
                    name="date" 
                    placeholder="Date"
                    onChange={handleInputChange}
                    value={logFormData.date}
                />
                <input 
                    type="text" 
                    name="medicine" 
                    placeholder="Medicine"
                    onChange={handleInputChange}
                    value={logFormData.medicine}
                />
                <input 
                    type="text" 
                    name="symptomLevel" 
                    placeholder="Symptom Level"
                    onChange={handleInputChange}
                    value={logFormData.symptomLevel}
                />
                  <input 
                    type="text" 
                    name="note" 
                    placeholder="Notes"
                    onChange={handleInputChange}
                    value={logFormData.note}
                />
                <input 
                    type="submit"
                    name="Create Log"
                    value="Create Log"
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        logFormData: state.newLogForm,
        userId: state.currentUser.data.id
    }
}

// 2. We pass the action creator to the redux connect function
// using either mapDispatchToProps or the shorthand objext syntax as below
export default connect(mapStateToProps, ({ updateNewLogForm, createLog }))(LogForm)