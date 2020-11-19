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

export const setMedicineFormData = medicine => {

    const medicineFormData = {
        name: medicine ? medicine.name : "",
        dosage: medicine ? medicine.dosage : "",
        note: medicine ? medicine.note : ","
    }

    return {
        type: "SET_MEDICINE_FORM_DATA",
        medicineFormData
    }
}

//asynchronous action creators