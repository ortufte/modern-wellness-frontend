import React from 'react';
import { connect } from 'react-redux'

const MedicineCabinet = ({ currentUser }) => {

    const medicinesJSX = currentUser.data.attributes.medicines.map(medicine => <li key={ medicine.id }> { medicine.name } </li>)

    return (
        <div className="medicine-cabinet">

            <h1> Medicine Cabinet </h1>

            { medicinesJSX }

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(MedicineCabinet)