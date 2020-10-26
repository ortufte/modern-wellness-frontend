import React from 'react';

const MedicineCabinet = ({ medicines }) => {

    const medicinesJSX = medicines.map(medicine => <li key={ medicine.id }> { medicine.name } </li>)

    return (
        <div className="medicine-cabinet">
        <h1> Medicine Cabinet </h1>
        { medicinesJSX }
        </div>
    )

}

export default MedicineCabinet