import React from 'react';
import { connect } from 'react-redux';
import { updateProfileForm } from '../actions/profileForm';
import { TextField, Button } from '@material-ui/core'

const ProfileForm = ({ profileFormData, updateProfileForm, userId, handleProfileForm, buttonLabel, history, currentUser }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...profileFormData, 
            [name]:value
        }
        updateProfileForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleProfileForm(profileFormData, userId, history)
    }

    return (

        <form className="profile-form" onSubmit={handleSubmit}>
            <TextField 
                id="name" 
                label="Name" 
                name="name" 
                placeholder="Name"
                required={true}
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={profileFormData.name}
            />
            <TextField
                id="affliction"
                label="What would you like to track symptoms for?"
                name="affliction" 
                placeholder="Affliction"
                required={true}
                margin="normal"
                fullWidth
                onChange={handleInputChange}
                value={profileFormData.affliction}
            />
            <Button
                type="submit"
                color="primary"
                variant="text"
                size="medium"
                style={{ marginTop: 20 }}
                fullWidth
                value={buttonLabel}>{buttonLabel}
            </Button>
    </form>
    )
}

const mapStateToProps = state => {
    return {
        profileFormData: state.profileForm,
        userId: state.currentUser.data.id,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, ({ updateProfileForm }))(ProfileForm)
