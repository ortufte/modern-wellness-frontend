export const updateLoginForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}

//action creator is an action that returns a fucnction