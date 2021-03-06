import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import MedicineForm from './MedicineForm';
import { createMedicine } from '../actions/userMedicines';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';

const NewMedicine = ({ history, createMedicine }) => {

    const handleSubmit = (medicineFormData, userId) => {
        createMedicine(medicineFormData, userId, history)
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
        <div className="addMedicine">
            <Button size="large" variant="text" onClick={handleClickOpen}>
                <Typography variant="subtitle2">New Treatment</Typography>
            </Button>

            <Dialog
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title"
                maxWidth="md"
                margin="auto">

                <DialogTitle id="form-dialog-title" disableTypography ><Typography variant="h3" color="primary">New Treatment</Typography></DialogTitle>
            
                <DialogContent>

                    <DialogContentText>
                        Enter treatment information...
                    </DialogContentText>

                    <MedicineForm 
                        buttonLabel="Create" 
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

export default withRouter(connect(null, { createMedicine })(NewMedicine))