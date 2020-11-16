import React from 'react';
import { connect } from 'react-redux';
import { deleteMedicine } from '../actions/userMedicines';

const Medicine =  (props) => {

    const medicineInfo = props.location.state.medicine
    return (
        <div className="log">
            <h3>Medicine Component</h3>
            <p>Name: {medicineInfo.name}</p>
            <p>Dosage: {medicineInfo.dosage}</p>
            <p>Note: {medicineInfo.note}</p>
            <button onClick={() => props.deleteMedicine(medicineInfo.id, medicineInfo.user_id, props.history)}>Delete Medicine</button>
        </div>
    ) 
}

export default connect(null, { deleteMedicine })(Medicine)