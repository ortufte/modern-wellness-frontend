import { resetLoginForm } from './loginForm';
import { resetSignUpForm } from './signUpForm';
import { resetProfileForm } from './profileForm';
import { setUserLogs, clearLogs } from './userLogs';
import { setUserMedicines, clearMedicines } from './userMedicines';

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

export const editProfileSuccess = (user) => {
  return {
      type: "EDIT_USER",
      payload: user
  }
}

//asynchronous action creators - returning an action creator - function

export const login = (userInfo, history) => { 
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
          if (user.error) {
            alert(user.error) //Server Errors
          }
          else {
     
            dispatch(setCurrentUser(user)) 
            dispatch(setUserLogs(user.data.attributes.logs))
            dispatch(setUserMedicines(user.data.attributes.medicines))
            dispatch(resetLoginForm())
            history.push(`/users/${user.data.id}`)
          }
        })
        .catch(err => console.error("Error:", err)); //JS Errors
    } 
}
// first dispatch is updating frontend, second dispatch is updating backend
export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser()) 
    dispatch(clearLogs())
    dispatch(clearMedicines())

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
        //credentials (cookies) (set to true in cors.rb) are required when you send a request that needs authorization (password)
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
          dispatch(setUserLogs(user.data.attributes.logs))
          dispatch(setUserMedicines(user.data.attributes.medicines))
        }
      })
      .catch(err => console.error("Error:", err)); //JS Errors
  } 
}

export const createUser = (userData, history) => { 
  return dispatch => {
    const userInfo = {
      user: userData
    }
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
        if (user.error) {
          alert(user.error) //Server Errors
        }
        else {
          dispatch(setCurrentUser(user))
          dispatch(resetSignUpForm())
          history.push(`/users/${user.data.id}`)
        }
      })
      .catch(err => console.error("Error:", err)); //JS Errors
  } 
}

export const editUser = (profileFormData, userId, history) => {
  return dispatch => {
    const backendCompatibleData = {
        user: {
            name: profileFormData.name,
            affliction: profileFormData.affliction,
            user_id: userId,
        }
    }
    return fetch(`http://localhost:3001/api/v1/users/${userId}`, {
        credentials: "include", 
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
              backendCompatibleData
          )
    })
    .then(resp => resp.json())
    .then(user => {
        if (user.error) {
            alert(user.error)
        } 
        else {
            dispatch(editProfileSuccess(user))
            dispatch(resetProfileForm)
            history.push(`/users/${userId}/profile`)
        }
    }) 
    .catch((error) => {
        console.error('Error:', error);
      })
}
}




