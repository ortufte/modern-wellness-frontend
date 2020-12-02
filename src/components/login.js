import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser' //- login action from currentuser actions
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@material-ui/core'
import { withRouter } from "react-router";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForward';

const Login = ({ loginFormData, updateLoginForm, login, history })  => { 

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData, 
            [name]:value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history) // LOGIN ACTION
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    return (
        <div className="login">
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Login
            </Button>
            
            <Dialog 
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title">
                
                <DialogTitle id="form-dialog-title"><Typography variant="h3" color="primary">Login</Typography></DialogTitle>
               
                <DialogContent>
                    
                    <DialogContentText>
                        <Typography variant="h5" >Enter your email address and password to login...</Typography>
                    </DialogContentText>

                    <form onSubmit={handleSubmit}> 
                        <TextField 
                            label="Email"
                            name="email" 
                            placeholder="Email Address"
                            style={{ margin: 8,
                            width: 200 }}
                            onChange={handleInputChange} //initial ({name, value}) is destructuring the event
                            value={loginFormData.email} //this makes this a controlled component
                        />
                        <TextField 
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={{ margin: 8,
                            width: 200 }}
                            onChange={handleInputChange}
                            value={loginFormData.password} //this makes this a controlled component
                        />
                        <Button 
                            type="submit" 
                            name="Login" 
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
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm //returning the whole form instead of email, password  to make updating state easier 
    }
}

export default withRouter(connect(mapStateToProps, { updateLoginForm, login })(Login)) 