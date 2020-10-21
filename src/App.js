import React from 'react';
import './App.css';
import SignUp from './components/signup'

class App extends React.Component {

  state = {
    user: null, 
    signUpForm: {
      name: "",
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
    .then(json => 
      this.setState({ user: json }))
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
      </div>
    );
  }
}

export default App;
