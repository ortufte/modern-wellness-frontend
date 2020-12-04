import React from 'react';
import { connect } from 'react-redux';
// 1. We grab the action creator - (below)
import { updateLogForm } from '../actions/logForm';
// 3. Redux gives us back a prop called updatenLogForm
// which when invoked actually redux will dispatch (back to action creator, 
// then to reducer switch with data)
import { TextField, Button } from '@material-ui/core';

const LogForm = ({ logFormData, updateLogForm, userId, handleLogForm, buttonLabel, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...logFormData, 
            [name]:value
        }
    // 4. This is not an invocation of just the action creator
    // it's now Redux dispatching the action creator with the 
    // appropriate arguments. (below)
        updateLogForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleLogForm(logFormData, userId, history)
    }

    return (
        <form className="log-form" onSubmit={handleSubmit}>
            <TextField 
                id="date" 
                label="Date" 
                name="date" 
                placeholder="mm/dd/yyyy"
                helperText="format: mm/dd/yyyy"
                required={true}
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={logFormData.date}
            />
            <TextField
                id="medicine"
                label="Treatment"
                name="medicine" 
                placeholder="Treatment"
                helperText="        "
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={logFormData.medicine}
            />
            <TextField
                id="symptomLevel"
                label="Symptom Level "
                name="symptomLevel" 
                placeholder="Symptom Level"
                helperText="range: 0-10 (mild to severe)"
                required={true}
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={logFormData.symptomLevel}
            />
            <TextField
                id="note"
                label="Notes "
                name="note" 
                placeholder="Notes"
                helperText="        "
                margin="normal"
                fullWidth
                multiline
                onChange={handleInputChange}
                value={logFormData.note}
            />
            <Button
                type="submit"
                color="primary"
                variant="text"
                size="medium"
                style={{ marginTop: 20 }}
                fullWidth
                value={buttonLabel}>{buttonLabel}
            </Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        logFormData: state.logForm,
        userId: state.currentUser.data.id
    }
}

// 2. We pass the action creator to the redux connect function
// using either mapDispatchToProps or the shorthand objext syntax as below
export default connect(mapStateToProps, ({ updateLogForm }))(LogForm)



