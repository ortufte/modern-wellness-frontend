import { resetMedicineForm } from './medicineForm'

//synchronous action creators

export const setUserMedicines = medicines => {

    return {
        type: "SET_USER_MEDICINES",
        medicines
    }
}

export const addMedicine = medicine => {
    return {
        type: "ADD_MEDICINE",
        medicine
    }
}


export const clearMedicines = () => {
    return {
        type: "CLEAR_MEDICINES"
    }
}

//asynchronous action creators

export const createMedicine = (medicineFormData, userId, history) => {
    return dispatch => {
        const backendCompatibleData = {
            medicine: {
                name: medicineFormData.name,
                dosage: medicineFormData.dosage,
                note: medicineFormData.note,
                user_id: userId,
            }
        }
    
        return fetch(`http://localhost:3001/api/v1/users/${userId}/medicines`, {
            credentials: "include",
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                backendCompatibleData
            )
          })
          .then(resp => resp.json())
          .then(medicine => {
            if (medicine.error) {
              alert(medicine.error) //Server Errors
            }
            else {
                dispatch(addMedicine(medicine))
                dispatch(resetMedicineForm())
                history.push(`/users/${medicine.user_id}/medicine-cabinet`)
            }
          })
    }
}

