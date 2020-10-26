import React from 'react'

const LogList = ({ logs }) => {

    const logsJSX = logs.map(log => <li key={ log.id }> { log.date } </li>)

    return (
        <div className="logs">
        <h1> LogList </h1>
        { logsJSX }
        </div>
    )

}

export default LogList