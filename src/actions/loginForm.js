export const updateLoginForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}

export const resetLoginForm = () => { // ({name, value}) is coming from the form action on change  
return {
        type: "RESET_LOGIN_FORM"
    }
}

//action creator is an action that returns a fucnction

