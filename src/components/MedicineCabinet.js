import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NewMedicine from './NewMedicine'
import { Typography, Button } from '@material-ui/core';

class MedicineCabinet extends React.Component {
    
    render() {

        const medicinesJSX = this.props.userMedicines.map(medicine =>

        <p key={medicine.id}>
            <Button component={Link} to={`${this.props.match.url}/${medicine.id}`} size="large" variant="text">
                <Typography variant="h4" color="secondary">{medicine.name}</Typography>
            </Button>
        </p>)

        return (
            <div className="medicine-cabinet" >
    
                <Typography variant="h3" color="secondary" style={{padding: 20}}>Medicine Cabinet</Typography>
        
                { medicinesJSX }
           
                <NewMedicine />
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