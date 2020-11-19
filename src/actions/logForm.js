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

export const setLogFormData = log => {

    const logFormData = {
        date: log.date,
        medicine: log.medicine,
        symptomLevel: log.symptom_level,
        note: log.note
    }

    return {
        type: "SET_LOG_FORM_DATA",
        logFormData
    }
}

//asynchronous action creators
