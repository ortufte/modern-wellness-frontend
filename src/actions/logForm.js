export const updateLogForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_LOG_FORM",
        formData
    }
}

export const resetLogForm = () => { // ({name, value}) is coming from the form action on change  
return {
        type: "RESET_LOG_FORM"
    }
}

//asynchronous action creators
