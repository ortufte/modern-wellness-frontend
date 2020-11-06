import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';
import { createUser } from '../actions/currentUser';
import { Link } from 'react-router-dom';



const SignUp = ({ signUpFormData, updateSignUpForm, createUser }) => {

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
        createUser(signUpFormData)
    }

    return (
        <div className="signup">

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

            <Link to="/login"> Login </Link>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        signUpFormData: state.signUpForm
    }
}

export default connect(mapStateToProps, ({ updateSignUpForm, createUser }))(SignUp)

