
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { editMedicine } from '../actions/userMedicines';
import MedicineForm from './MedicineForm';
import { setMedicineFormData } from '../actions/medicineForm';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';


const EditMedicine = ({ history, editMedicine, match, userMedicines, setMedicineFormData }) => {
    
    const medicineId = match.params.medicineId
    const medicine = userMedicines.find(medicine => medicine.id === parseInt(medicineId))
   
    useEffect(() => {
        setMedicineFormData(medicine) 
    })

    const handleSubmit = (medicineFormData, userId) => {
        editMedicine(medicineFormData, userId, history, medicineId )
        handleClose()
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="editMedicine">
            <Button size="large" variant="text" onClick={handleClickOpen}>
                <Typography variant="subtitle2">Edit Treatment</Typography>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="md"
                margin="auto">

                <DialogTitle id="form-dialog-title" disableTypography ><Typography variant="h3" color="primary">Edit Treatment</Typography></DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        Edit treatment information...
                    </DialogContentText>

                        <MedicineForm 
                            buttonLabel="Save" 
                            handleMedicineForm={handleSubmit}
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button 
                            onClick={handleClose} 
                            color="primary"
                            variant="outlined"
                            size="small"
                            style={{ margin: 20 }}
                            >Cancel
                        </Button>
                    </DialogActions>

            </Dialog>
        </div>
    )
}

const mapStateToProps = ({ userMedicines }) => {
    return {
        userMedicines
    }
}

export default withRouter(connect(mapStateToProps, { editMedicine, setMedicineFormData })(EditMedicine))