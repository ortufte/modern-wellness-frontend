import React from 'react';
import { connect } from 'react-redux';
import { updateMedicineForm } from '../actions/medicineForm';
import { TextField, Button } from '@material-ui/core';

const MedicineForm = ({ medicineFormData, updateMedicineForm, userId, handleMedicineForm, buttonLabel, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...medicineFormData, 
            [name]:value
        }
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
                required={true}
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={medicineFormData.name}
            />
            <TextField 
                id="dosage"
                label="Dosage/Frequency"
                name="dosage" 
                placeholder="Dosage/Frequency"
                required={true}
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={medicineFormData.dosage}
            />
            <TextField
                id="note"
                label="Notes"
                name="note" 
                placeholder="Notes"
                margin="normal"
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

export default connect(mapStateToProps, ({ updateMedicineForm }))(MedicineForm)