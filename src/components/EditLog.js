import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LogForm from './LogForm';
import { editLog } from '../actions/userLogs';
import { setLogFormData } from '../actions/logForm';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';


const EditLog = ({ history, editLog, match, userLogs, setLogFormData }) => {
    
    const logId = match.params.logId
    const log = userLogs.find(log => log.id === parseInt(logId))
   
    useEffect(() => {
        setLogFormData(log) 
    })

    const handleSubmit = (logFormData, userId) => {
        editLog(logFormData, userId, history, logId )
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
        <div className="editLog">
            <Button size="large" variant="text" onClick={handleClickOpen}>
                <Typography variant="subtitle2">Edit Log</Typography>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                margin="auto">

                <DialogTitle id="form-dialog-title" disableTypography ><Typography variant="h3" color="primary">Edit Log</Typography></DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        Edit log information...
                    </DialogContentText>

                        <LogForm 
                            buttonLabel="Save" 
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

const mapStateToProps = ({ userLogs }) => {
    return {
        userLogs
    }
}

export default withRouter(connect(mapStateToProps, { editLog, setLogFormData })(EditLog))