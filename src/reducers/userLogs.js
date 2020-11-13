const initialState = []

export default ( state = initialState, action ) => {
    switch (action.type) {

        case "SET_USER_LOGS":
            return action.logs
        case "ADD_LOG":
            return state.concat(action.log)
        case "CLEAR_LOGS":
            return initialState
        default:
            return state
    }
}