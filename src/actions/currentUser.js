import { resetLoginForm } from './loginForm';
import { resetSignUpForm } from './signUpForm';

//synchronous action creators

export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

//asynchronous action creators - returning an action creator - function

export const login = (credentials, history) => { 
    return dispatch => {

        // let user = this.state.loginForm - from simple react function in App.js
        //could message creating user or soemthing 
        return fetch("http://localhost:3001/api/v1/login", {
          credentials: "include",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            credentials 
          )
        })
        .then(resp => resp.json())
        .then(user => {
          if (user.error) {
            alert(user.error) //Server Errors
          }
          else {
            dispatch(setCurrentUser(user)) 
            dispatch(resetLoginForm())
            history.push("/")
             //need to update to only grab name and email, not password
            // this.setState({ currentUser: user }) - vanilla redux
          }
        })
        .catch(err => console.error("Error:", err)); //JS Errors
    } 
}
// first dispatch is updating frontend, second dispatch is updating backend
export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser()) 
    // dispatch(clearLogs()) clearing logs from state 

    return fetch("http://localhost:3001/api/v1/logout", { 
      credentials: "include",
      method: 'DELETE',
    })
  }
}

export const getCurrentUser = () => { 
  return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(resp => resp.json())
      .then(user => {
        if (user.error) {
          alert(user.error) //Server Errors
        }
        else {
          console.log(user)
          dispatch(setCurrentUser(user))
        }
      })
      .catch(err => console.error("Error:", err)); //JS Errors
  } 
}

export const createUser = userData => { 
  console.log("data", userData)
  return dispatch => {
    const userInfo = {
      user: userData
    }
    console.log("info", userInfo)

      // let user = this.state.loginForm - from simple react function in App.js
      //could message creating user or soemthing 
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          userInfo
        )
      })
      .then(resp => resp.json())
      .then(user => {
        console.log(user)
        if (user.error) {
          alert(user.error) //Server Errors
        }
        else {
          dispatch(setCurrentUser(user))
          dispatch(resetSignUpForm())
           
           //need to update to only grab name and email, not password
          // this.setState({ currentUser: user }) - vanilla redux
        }
      })
      .catch(err => console.error("Error:", err)); //JS Errors
  } 
}




