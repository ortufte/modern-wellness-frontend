const initialState = []

export default ( state = initialState, action ) => {
    switch (action.type) {

        case "SET_USER_MEDICINES":
            return action.medicines
        case "ADD_MEDICINE":
            return state.concat(action.medicine)
        case "CLEAR_MEDICINES":
            return initialState
        default:
            return state
    }
}