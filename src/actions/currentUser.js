
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
             //need to update to only grab name and email, not password
            // this.setState({ currentUser: user }) - vanilla redux
          }
        })
        .catch(err => console.error("Error:", err)); //JS Errors
    } 
}
// first dispatch is updating frontend, second dispatch is updating backend
export const logout = (credentials) => {
  return dispatch => {
    dispatch(clearCurrentUser()) 
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
          dispatch(setCurrentUser(user))
        }
      })
      .catch(err => console.error("Error:", err)); //JS Errors
  } 
}

export const createUser = userData => {

}




