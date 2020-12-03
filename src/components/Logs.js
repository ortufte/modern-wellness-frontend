import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import NewLog from './NewLog'
import { Typography, Button } from '@material-ui/core';

class Logs extends React.Component {

    render() {

        const logsJSX = this.props.userLogs.map(log => 
       
            <h3 key={log.id}>
                <Button component={Link} to={`${this.props.match.url}/${log.id}`} size="large" variant="text">
                    <Typography variant="h4" color="secondary">{log.date}</Typography>
                </Button>
            </h3>)
      
        return (
            <div>
                <Typography variant="h3" color="secondary" style={{padding: 20}}>Daily Logs</Typography>
                { logsJSX }
                <NewLog />
            </div>
        )
    }   
}

const mapStateToProps = ({ userLogs }) => {
    return {
        userLogs
    }
}

export default connect(mapStateToProps)(Logs)