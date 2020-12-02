import React from 'react';
import { connect } from 'react-redux';
// 1. We grab the action creator - (below)
import { updateMedicineForm } from '../actions/medicineForm';
// 3. Redux gives us back a prop called updateLogForm
// which when invoked actually redux will dispatch (back to action creator, 
// then to reducer switch with data)
import { TextField, Button } from '@material-ui/core';

const MedicineForm = ({ medicineFormData, updateMedicineForm, userId, handleMedicineForm, buttonLabel, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...medicineFormData, 
            [name]:value
        }
    // 4. This is not an invocation of just the action creator
    // it's now Redux dispatching the action creator with the 
    // appropriate arguments. (below)
        updateMedicineForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleMedicineForm(medicineFormData, userId, history)
    }

    return (
        <form className="medicine-form" onSubmit={handleSubmit}>
            <TextField
                id="name"
                label="Name"
                name="name" 
                placeholder="Name"
                fullWidth
                onChange={handleInputChange}
                value={medicineFormData.name}
            />
            <TextField 
                id="dosage"
                label="Dosage"
                name="dosage" 
                placeholder="Dosage"
                fullWidth
                onChange={handleInputChange}
                value={medicineFormData.dosage}
            />
            <TextField
                id="note"
                label="Notes"
                name="note" 
                placeholder="Notes"
                fullWidth
                multiline
                onChange={handleInputChange}
                value={medicineFormData.note}
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
        medicineFormData: state.medicineForm,
        userId: state.currentUser.data.id
    }
}

// 2. We pass the action creator to the redux connect function
// using either mapDispatchToProps or the shorthand objext syntax as below
export default connect(mapStateToProps, ({ updateMedicineForm }))(MedicineForm)