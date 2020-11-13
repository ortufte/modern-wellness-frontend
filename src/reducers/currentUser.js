const initialState = {
    data: {
        attributes: {
            name: "",
            email: "",
            affliction: "",
        },
        id: " "
    }
 }

export default ( state = initialState, action ) => { // the state needs to be set equal to an array or an object depending on which data type the reducer is responsible for returning.
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.payload

        case "CLEAR_CURRENT_USER":
            return null

        default: 
            return state
    }
}

