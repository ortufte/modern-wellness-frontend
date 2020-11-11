export const updateNewLogForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_NEW_LOG_FORM",
        formData
    }
}

export const resetNewLogForm = () => { // ({name, value}) is coming from the form action on change  
return {
        type: "RESET_NEW_LOG_FORM"
    }
}

//asynchronous action creators
