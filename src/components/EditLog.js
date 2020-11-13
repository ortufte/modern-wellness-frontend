import React from 'react';
import LogForm from './LogForm';

const EditLog = () => {

    handleSubmit = ( newTitle, newMessage ) => {
        const data = {
            newTitle, 
            newMessage
        }
        this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data })
    }

    return (
        <div className="editLog">
            <LogForm
                buttonLabel="Update Log"
                handleLogForm={this.handleSubmit} 
            />
        </div>
    )

    export default EditLog
}