import { resetLogForm } from './logForm'

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

export const editLogSuccess = log => {
    return {
        type: "EDIT_LOG",
        log
    }
}

export const deleteLogSuccess = log => {
    return {
        type: "DELETE_LOG",
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
                dispatch(resetLogForm())
                history.push(`/users/${log.user_id}/logs`)
            }
        })
    }
}

export const editLog = (logFormData, userId, history, logId) => {
    console.log(userId)
    console.log("editLogaction", logId)
    return dispatch => {
        const backendCompatibleData = {
            log: {
                date: logFormData.date,
                medicine: logFormData.medicine,
                symptom_level: logFormData.symptomLevel,
                note: logFormData.note,
                user_id: userId,
                id: logId
            }
        }
        return fetch(`http://localhost:3001/api/v1/users/${userId}/logs/${logId}`, {
            credentials: "include", 
            method: "PATCH",
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
                alert(log.error)
            } 
            else {
                dispatch(editLogSuccess(log))
                dispatch(resetLogForm)
                history.push(`/users/${userId}/logs/${logId}`)
            }
        }) 
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}

export const deleteLog = (logId, userId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users/${userId}/logs/${logId}`, {
            credentials: "include",
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(log => {
            if (log.error) {
                alert(log.error)
            } 
            else {
                dispatch(deleteLogSuccess(log))
                history.push(`/users/${userId}/logs`)
            }
        }) 
        .catch((error) => {
            console.error('Error:', error);
          })
    }
}



