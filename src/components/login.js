import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser' //- login action from currentuser actions

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
    
    return (
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
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm //returning the whole form instead of email, password  to make updating state easier 
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login) 