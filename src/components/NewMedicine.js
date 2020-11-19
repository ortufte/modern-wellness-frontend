
import React from 'react';
import { createMedicine } from '../actions/userMedicines';
import MedicineForm from './MedicineForm';
import { connect } from 'react-redux';

const NewMedicine = ({ history, createMedicine }) => {

    const handleSubmit = (medicineFormData, userId) => {
        createMedicine(medicineFormData, userId, history)
      }
      
    return (
        <div className="addMedicine">
            <h1> Create Medicine </h1>
            <MedicineForm 
                buttonLabel="Create Medicine" 
                handleMedicineForm={handleSubmit}
            />
        </div>
    )
}

export default connect(null, { createMedicine })(NewMedicine)