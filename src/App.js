import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

class App extends React.Component {

  state = {
    user: null, 
    signUpForm: {
      name: "",
      email: "",
      password: "",
    },
    loginForm: {
      email: "",
      password: "",
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      signUpForm: {
        ...this.state.signUpForm,
        [name]: value
      },
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  }

  handleSignUp = event => {
    event.preventDefault();

    let user = this.state.signUpForm

    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify(
        { user }
      )
    })
    .then(resp => resp.json())
    .then(user => 
      this.setState({ user: user }))
    .catch(err => console.error("Error:", err));
  }

  handleLogin = event => {
    event.preventDefault()

    let user = this.state.loginForm

    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { user }
      )
    })
    .then(resp => resp.json())
    .then(user => 
      this.setState({ user: user }))
    .catch(err => console.error("Error:", err));
  }


  render() {
    return (
      <div className="App">
        Modern Wellness Frontend 
        <SignUp 
        handleInputChange={this.handleInputChange}
        handleSignUp={this.handleSignUp}
        name={this.state.signUpForm.name}
        email={this.state.signUpForm.email}
        password={this.state.signUpForm.password}
        />
        <Login
        handleInputChange={this.handleInputChange}
        handleLogin={this.handleLogin}
        email={this.state.signUpForm.email}
        password={this.state.signUpForm.password}
        />
      </div>
    );
  }
}


export default App;
