import React from 'react';
import { connect } from 'react-redux';
import EditLog from './EditLog'
import { deleteLog } from '../actions/userLogs';
import { Button, Typography } from '@material-ui/core'

const Log =  (props) => {

    const logId = props.match.params.logId
    const log = props.userLogs.find(log => log.id === parseInt(logId))

    return (
        <div className="log">
            <Typography variant="h3" color="secondary" style={{padding: 20}}>Log Details</Typography>
            <br></br>
            <Typography variant="h4" color="secondary">date: {log ? log.date : ""}</Typography>
            <Typography variant="h4" color="secondary">medicine: {log ? log.medicine : ""}</Typography>
            <Typography variant="h4" color="secondary">symptom level: {log ? log.symptom_level : "" }</Typography>
            <Typography variant="h4" color="secondary">notes: {log ? log.note : ""}</Typography>
            <br></br>
            <EditLog />
            <Button onClick={() => props.deleteLog(log.id, log.user_id, props.history)} size="large" variant="text">
                <Typography variant="subtitle2" >Delete Log</Typography>
            </Button>

        </div>
    ) 
}

const mapStateToProps = ({ userLogs }) => {
    return {
        userLogs
    }
}

export default connect(mapStateToProps, { deleteLog })(Log)