import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';
import { createUser } from '../actions/currentUser';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { withRouter } from "react-router";


const SignUp = ({ signUpFormData, updateSignUpForm, createUser, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signUpFormData, 
            [name]:value
        }
        updateSignUpForm(updatedFormInfo)
    }

    const handleSignUp = event => {
        event.preventDefault()
        createUser(signUpFormData, history)
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="signup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Sign Up
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>

                    <form className="signup" onSubmit={handleSignUp}>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={signUpFormData.name}
                        />
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email Address"
                        onChange={handleInputChange}
                        value={signUpFormData.email}
                        />
                        <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={signUpFormData.password}
                        />
                        <input 
                        type="submit" 
                        name="Sign Up" 
                        value="Sign Up"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signUpFormData: state.signUpForm
    }
}

export default withRouter(connect(mapStateToProps, ({ updateSignUpForm, createUser }))(SignUp))

