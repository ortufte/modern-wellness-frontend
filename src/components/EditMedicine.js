
import React from 'react';
import { editMedicine } from '../actions/userMedicines';
import MedicineForm from './MedicineForm';
import { connect } from 'react-redux';
import { setMedicineFormData } from '../actions/medicineForm';
import { useEffect } from 'react'

const EditMedicine = ({ history, editMedicine, match, userMedicines, setMedicineFormData }) => {
    
    const medicineId = match.params.medicineId
    const medicine = userMedicines.find(medicine => medicine.id === parseInt(medicineId))
   
    useEffect(() => {
        setMedicineFormData(medicine) 
    })

    const handleSubmit = (medicineFormData, userId) => {
        editMedicine(medicineFormData, userId, history, medicineId )
    }

    return (
        <div className="editMedicine">
            <h1> Edit Medicine </h1>
            <MedicineForm 
                buttonLabel="Edit Medicine" 
                handleMedicineForm={handleSubmit}
            />
        </div>
    )
}

const mapStateToProps = ({ userMedicines }) => {
    return {
        userMedicines
    }
}

export default connect(mapStateToProps, { editMedicine, setMedicineFormData })(EditMedicine)