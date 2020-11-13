import React from 'react';

const Medicine =  (props) => {

    const medicineInfo = props.location.state.medicine
    console.log(medicineInfo)
    return (
        <div className="log">
            <h3>Medicine Component</h3>
            <p>Name: {medicineInfo.name}</p>
            <p>Dosage: {medicineInfo.dosage}</p>
            <p>Note: {medicineInfo.note}</p>
        </div>
    ) 
}

export default Medicine