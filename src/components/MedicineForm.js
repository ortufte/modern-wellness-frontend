import React from 'react';
import { connect } from 'react-redux';
// 1. We grab the action creator - (below)
import { updateMedicineForm } from '../actions/medicineForm';
// 3. Redux gives us back a prop called updateLogForm
// which when invoked actually redux will dispatch (back to action creator, 
// then to reducer switch with data)
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
        <div className="medicine-form">
            <form className="medicine-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Medicine Name: </label>
                <input 
                    id="name"
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={medicineFormData.name}
                />
                <label htmlFor="dosage">Dosage: </label>
                <input 
                    id="dosage"
                    type="text" 
                    name="dosage" 
                    placeholder="Dosage"
                    onChange={handleInputChange}
                    value={medicineFormData.dosage}
                />
                <label htmlFor="note">Notes: </label>
                  <input 
                    id="note"
                    type="text" 
                    name="note" 
                    placeholder="Notes"
                    onChange={handleInputChange}
                    value={medicineFormData.note}
                />
                <input 
                    type="submit"
                    name="Create Medicine"
                    value={buttonLabel}
                />
            </form>
        </div>
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