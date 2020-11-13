import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MedicineCabinet extends React.Component {
    
    render() {

    const medicinesJSX = this.props.userMedicines.map(medicine =>
         <li key={ medicine.id }>
             <Link to={{pathname: `${this.props.match.url}/${medicine.id}`,
                    state: {
                        medicine: medicine
                    }
                }}>{medicine.name}
                </Link> 
            </li>)
   
        return (
            <div className="medicine-cabinet">

                <h1> Medicine Cabinet </h1>

                { medicinesJSX }
                <br></br>

            </div>
        )
    }
}

const mapStateToProps = ({ userMedicines }) => {
    return {
        userMedicines
    }
}

export default connect(mapStateToProps)(MedicineCabinet)