import React from 'react';

const Login = (props) => {

    return (
        <form onSubmit={props.handleLogin}>
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
        name="Login" 
        />
    </form>
    )
}

export default Login