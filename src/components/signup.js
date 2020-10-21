import React from 'react';

const SignUp = (props) => {

    return (
        <form onSubmit={props.handleSignUp}>
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            onChange={props.handleInputChange}
            value={props.name}
            />
            <input 
            type="text" 
            name="email" 
            placeholder="Email Address"
            onChange={props.handleInputChange}
            value={props.email}
            />
            <input 
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.handleInputChange}
            value={props.password}
            />
            <input 
            type="submit" 
            name="Sign Up" 
            />
        </form>
    )
}

export default SignUp