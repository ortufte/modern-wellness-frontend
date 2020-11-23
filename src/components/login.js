import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser' //- login action from currentuser actions
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { withRouter } from "react-router";

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
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <form className="login" onSubmit={handleSubmit}> 
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email Address"
                            onChange={handleInputChange} //initial ({name, value}) is destructuring the event
                            value={loginFormData.email} //this makes this a controlled component
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                            value={loginFormData.password} //this makes this a controlled component
                        />
                        <input 
                            type="submit" 
                            name="Login" 
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
        loginFormData: state.loginForm //returning the whole form instead of email, password  to make updating state easier 
    }
}

export default withRouter(connect(mapStateToProps, { updateLoginForm, login })(Login)) 