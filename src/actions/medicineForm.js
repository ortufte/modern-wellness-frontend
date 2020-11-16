export const updateMedicineForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_MEDICINE_FORM",
        formData
    }
}

export const resetMedicineForm = () => { // ({name, value}) is coming from the form action on change  
return {
        type: "RESET_MEDICINE_FORM"
    }
}

//asynchronous action creators