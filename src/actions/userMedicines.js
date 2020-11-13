//synchronous action creators

export const setUserMedicines = medicines => {

    return {
        type: "SET_USER_MEDICINES",
        medicines
    }
}


export const clearMedicines = () => {
    return {
        type: "CLEAR_MEDICINES"
    }
}

//asynchronous action creators


