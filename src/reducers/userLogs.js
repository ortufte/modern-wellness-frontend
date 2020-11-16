const initialState = []

export default ( state = initialState, action ) => {
    switch (action.type) {

        case "SET_USER_LOGS":
            return action.logs
        case "ADD_LOG":
            return state.concat(action.log)
        case "DELETE_LOG":
            return state.filter(log => log.id !== action.log.id)
        case "CLEAR_LOGS":
            return initialState
        default:
            return state
    }
}