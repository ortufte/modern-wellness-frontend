import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import LogForm from './LogForm';

class Logs extends React.Component {

    render() {

        const logsJSX = this.props.userLogs.map(log => <li key={ log.id }> { log.date } </li>)
        return (
            <div className="logs">

                <h1> User Logs </h1>

                { logsJSX }

                <Link to={`${this.props.match.url}/new`}>New Log</Link>
          
                <Route exact path={`${this.props.match.path}/new`} component={LogForm}/>

            </div>
        )
    }   
}

const mapStateToProps = ({ currentUser, userLogs }) => {
    return {
        currentUser,
        userLogs
    }
}

export default connect(mapStateToProps)(Logs)