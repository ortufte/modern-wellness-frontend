import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { updateSignUpForm } from '../actions/signUpForm';
import { createUser } from '../actions/currentUser';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@material-ui/core'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForward';

//don't fuck with me 

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
        <div className="signup" >
            <Button variant="text" color="secondary" onClick={handleClickOpen}>
                Sign Up
            </Button>

            <div className="dialog" width="50px">
                <Dialog 
                    open={open} 
                    onClose={handleClose} 
                    aria-labelledby="form-dialog-title"
                    maxWidth="md"
                    margin="auto">
                    
                    <DialogTitle id="form-dialog-title" disableTypography ><Typography variant="h3" color="primary">Sign Up</Typography></DialogTitle>
                    
                    <DialogContent>
                        
                        <DialogContentText>
                            Enter your name, email, and password to sign up...
                        </DialogContentText>

                        <form onSubmit={handleSignUp}>
                            <TextField 
                            label="Name"
                            name="name" 
                            placeholder="Name"
                            style={{ margin: 8,
                                width: 225 }}
                            onChange={handleInputChange}
                            value={signUpFormData.name}
                            required={true}
                            />
                            <TextField 
                            label="Email"
                            name="email" 
                            placeholder="Email Address"
                            style={{ margin: 8,
                                width: 225 }}
                            onChange={handleInputChange}
                            value={signUpFormData.email}
                            required={true}
                            />
                            <TextField
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={{ margin: 8,
                                width: 225 }}
                            onChange={handleInputChange}
                            value={signUpFormData.password}
                            required={true}
                            />
                            <Button 
                                type="submit" 
                                style={{ margin: 15 }}
                                color="primary"
                            ><ArrowForwardRoundedIcon fontSize="large"></ArrowForwardRoundedIcon>
                            </Button>

                        </form>

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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signUpFormData: state.signUpForm
    }
}

export default withRouter(connect(mapStateToProps, ({ updateSignUpForm, createUser }))(SignUp))

