import React from 'react';
import { connect } from 'react-redux';
import { deleteMedicine } from '../actions/userMedicines';
import { Link } from 'react-router-dom'

const Medicine =  (props) => {

    const medicineId = props.match.params.medicineId
    const medicine = props.userMedicines.find(medicine => medicine.id === parseInt(medicineId))

    return (
        <div className="medicine">
            <h3>Medicine Component</h3>
            <p>Name: {medicine ? medicine.name : ""}</p>
            <p>Dosage: {medicine ? medicine.dosage : ""}</p>
            <p>Note: {medicine ? medicine.note : ""}</p>
            <button onClick={() => props.deleteMedicine(medicine.id, medicine.user_id, props.history)}>Delete Medicine</button>
            <Link to={`${props.match.url}/edit`}>Edit Medicine</Link> 
        </div>
    ) 
}

const mapStateToProps = ({ userMedicines }) => {
    return {
        userMedicines
    }
}

export default connect(mapStateToProps, { deleteMedicine })(Medicine)