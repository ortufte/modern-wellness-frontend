const initialState = {
    name: "",
    affliction: "",
}

export default ( state = initialState, action ) => { // the state needs to be set equal to an array or an object depending on which data type the reducer is responsible for returning.
    switch (action.type) {
        case "UPDATE_PROFILE_FORM":
            return action.formData//formData from action
        case "RESET_PROFILE_FORM":
                return initialState
        case "SET_PROFILE_FORM_DATA":
            return action.profileFormData
        default:
            return state
    }
}