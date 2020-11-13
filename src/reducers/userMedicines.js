const initialState = []

export default ( state = initialState, action ) => {
    switch (action.type) {

        case "SET_USER_MEDICINES":
            return action.medicines
        case "CLEAR_MEDICINES":
            return initialState
        default:
            return state
    }
}