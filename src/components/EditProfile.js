import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import ProfileForm from './ProfileForm';
import { editUser } from '../actions/currentUser';
import { setProfileFormData } from '../actions/profileForm';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
// import useDeepCompareEffect from 'use-deep-compare-effect'

const EditProfile = ({ history, editUser, setProfileFormData, currentUser }) => {


    // useDeepCompareEffect(() => {
    //     setProfileFormData(currentUser)
    // }, [currentUser])

    useEffect(() => {
        setProfileFormData(currentUser)
    }, [currentUser])

    const handleSubmit = (profileFormData, userId) => {
        editUser(profileFormData, userId, history)
        handleClose()
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="editProfile">
            <Button size="large" variant="text" onClick={handleClickOpen}>
                <Typography variant="subtitle2">Edit Profile</Typography>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                margin="auto">

                <DialogTitle id="form-dialog-title" disableTypography ><Typography variant="h3" color="primary">Edit Profile</Typography></DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        Edit your information...
                    </DialogContentText>

                    <ProfileForm 
                        buttonLabel="Save"
                        handleProfileForm={handleSubmit}
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

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        profileFormData: state.profileForm,
    }
}

export default withRouter(connect(mapStateToProps, { editUser, setProfileFormData })(EditProfile))