import React from 'react';

const Log =  (props) => {

    const logInfo = props.location.state.log

    return (
        <div className="log">
            <h3>Log Component</h3>
            <p>Date: {logInfo.date}</p>
            <p>Medicine: {logInfo.medicine}</p>
            <p>Symptom Level: {logInfo.symptom_level}</p>
            <p>Note: {logInfo.note}</p>
        </div>
    ) 

}

export default Log