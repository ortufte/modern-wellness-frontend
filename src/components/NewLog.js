
import React from 'react';
import { createLog } from '../actions/userLogs';
import LogForm from './LogForm';
import { connect } from 'react-redux';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
import { withRouter } from "react-router";

const NewLog = ({ history, createLog }) => {

    const handleSubmit = (logFormData, userId) => {
        createLog(logFormData, userId, history)
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
        <div className="addLog">
            <Button size="large" variant="text" onClick={handleClickOpen}>
                <Typography variant="subtitle2">New Log</Typography>
            </Button>

            <Dialog
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                margin="auto">

                <DialogTitle id="form-dialog-title"><Typography variant="h4" color="primary">New Log</Typography></DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        <Typography variant="h5" >Enter log information...</Typography>
                    </DialogContentText>
            
                    <LogForm 
                        buttonLabel="Create" 
                        handleLogForm={handleSubmit}
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

export default withRouter(connect(null, { createLog })(NewLog))