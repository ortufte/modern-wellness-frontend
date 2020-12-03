import React from 'react';
import { connect } from 'react-redux';
import EditMedicine from './EditMedicine'
import { deleteMedicine } from '../actions/userMedicines';
import { Button, Typography } from '@material-ui/core';

const Medicine =  (props) => {

    const medicineId = props.match.params.medicineId
    const medicine = props.userMedicines.find(medicine => medicine.id === parseInt(medicineId))

    return (
        <div className="medicine" >
            <Typography variant="h3" color="secondary" style={{padding: 20}}>Medicine Details</Typography>
            <br></br>
            <Typography variant="h4" color="secondary">name: {medicine ? medicine.name : ""}</Typography>
            <Typography variant="h4" color="secondary">dosage: {medicine ? medicine.dosage : ""}</Typography>
            <Typography variant="h4" color="secondary">notes: {medicine ? medicine.note : ""}</Typography>
            <br></br>
            <EditMedicine />
            <Button onClick={() => props.deleteMedicine(medicine.id, medicine.user_id, props.history)} size="large" variant="text">
                <Typography variant="subtitle2">Delete Medicine</Typography>
            </Button>
        </div>
    ) 
}

const mapStateToProps = ({ userMedicines }) => {
    return {
        userMedicines
    }
}

export default connect(mapStateToProps, { deleteMedicine })(Medicine)