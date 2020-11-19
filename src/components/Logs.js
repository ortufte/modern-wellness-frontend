import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Logs extends React.Component {

    render() {

        const logsJSX = this.props.userLogs.map(log => 
            
            <li key={log.id}>
                <Link to={{pathname:`${this.props.match.url}/${log.id}`}}>{log.date}</Link>
            </li>)

        return (
            <div className="logs">

                <h1> User Logs </h1>

                { logsJSX }
                <br></br>

                <Link to={`${this.props.match.url}/new`}>New Log</Link>
            

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