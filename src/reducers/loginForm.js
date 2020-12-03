const initialState = {
    email: "",
    password: "",
}

export default ( state = initialState, action ) => { // the state needs to be set equal to an array or an object depending on which data type the reducer is responsible for returning.
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData//formData from action
        case "RESET_LOGIN_FORM":
            return initialState
        default:
            return state
    }

}