const initialState = {
    date: "",
    medicine: "",
    symptomLevel: "",
    note:"",
}

export default ( state = initialState, action ) => { // the state needs to be set equal to an array or an object depending on which data type the reducer is responsible for returning.
    switch (action.type) {
        case "UPDATE_LOG_FORM":
            return action.formData//formData from action
        case "RESET_LOG_FORM":
                return initialState
        case "SET_LOG_FORM_DATA":
            debugger
            return action.logFormData
        default:
            return state
    }
}