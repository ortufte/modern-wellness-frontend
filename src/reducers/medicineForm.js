const initialState = {
    name: "",
    dosage: "",
    note:"",
}

export default ( state = initialState, action ) => { // the state needs to be set equal to an array or an object depending on which data type the reducer is responsible for returning.
    switch (action.type) {
        case "UPDATE_MEDICINE_FORM":
            return action.formData//formData from action
        case "RESET_MEDICINE_FORM":
                return initialState
        case "SET_MEDICINE_FORM_DATA":
            return action.medicineFormData
        default:
            return state
    }
}