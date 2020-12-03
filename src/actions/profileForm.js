export const updateProfileForm = formData => { // ({name, value}) is coming from the form action on change  
return {
        type: "UPDATE_PROFILE_FORM",
        formData
    }
}

export const resetProfileForm = () => { // ({name, value}) is coming from the form action on change  
return {
        type: "RESET_PROFILE_FORM"
    }
}

export const setProfileFormData = currentUser => {

    const profileFormData = {
        name: currentUser ? currentUser.data.attributes.name : "",
        affliction: currentUser ? currentUser.data.attributes.affliction : "",
    }

    return {
        type: "SET_PROFILE_FORM_DATA",
        profileFormData
    }
}