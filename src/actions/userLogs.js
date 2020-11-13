import { resetNewLogForm } from './newLogForm'

//synchronous action creators

export const setUserLogs = logs => {

    return {
        type: "SET_USER_LOGS",
        logs
    }
}

export const addLog = log => {
    return {
        type: "ADD_LOG",
        log
    }
}

export const clearLogs = () => {
    return {
        type: "CLEAR_LOGS"
    }
}

//asynchronous action creators

export const createLog = (logFormData, userId, history) => {
    return dispatch => {
        const backendCompatibleData = {
            log: {
                date: logFormData.date,
                medicine: logFormData.medicine,
                symptom_level: logFormData.symptomLevel,
                note: logFormData.note,
                user_id: userId,
            }
        }
        return fetch(`http://localhost:3001/api/v1/users/${userId}/logs`, {
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
          .then(log => {
            if (log.error) {
              alert(log.error) //Server Errors
            }
            else {
                dispatch(addLog(log))
                dispatch(resetNewLogForm())
                history.push(`/users/${log.user_id}/logs`)
            }
          })
    }
}
