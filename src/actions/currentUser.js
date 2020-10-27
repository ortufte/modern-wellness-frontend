
//synchronous action creators

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}

//asynchronous action creators

export const login = credentials => { 
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
            // this.setState({ currentUser: user }) - vanilla redux
          }
        })
        .catch(err => console.error("Error:", err)); //JS Errors
    } 
}

export const getCurrentUser = (credentials) => { 
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
          dispatch(setCurrentUser(user))
        }
      })
      .catch(err => console.error("Error:", err)); //JS Errors
  } 
}


