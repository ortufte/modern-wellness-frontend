import React from 'react';
import { connect } from 'react-redux';
// 1. We grab the action creator - (below)
import { updateMedicineForm } from '../actions/medicineForm';
import { createMedicine } from '../actions/userMedicines';
// 3. Redux gives us back a prop called updateLogForm
// which when invoked actually redux will dispatch (back to action creator, 
// then to reducer switch with data)
const MedicineForm = ({ medicineFormData, updateMedicineForm, createMedicine, userId, history }) => {

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

    const handleMedicine = event => {
        event.preventDefault()
        createMedicine(medicineFormData, userId, history)
    }

    return (
        <div className="medicine-form">
            <form className="medicine-form" onSubmit={handleMedicine}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={medicineFormData.name}
                />
                <input 
                    type="text" 
                    name="dosage" 
                    placeholder="Dosage"
                    onChange={handleInputChange}
                    value={medicineFormData.dosage}
                />
                  <input 
                    type="text" 
                    name="note" 
                    placeholder="Notes"
                    onChange={handleInputChange}
                    value={medicineFormData.note}
                />
                <input 
                    type="submit"
                    name="Create Medicine"
                    value="Create Medicine"
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
export default connect(mapStateToProps, ({ updateMedicineForm, createMedicine }))(MedicineForm)