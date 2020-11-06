export const updateSignUpForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignUpForm = () => { // ({name, value}) is coming from the form action on change  
return {
        type: "RESET_SIGNUP_FORM"
    }
}



// need reset signup form action 