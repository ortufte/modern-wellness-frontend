import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Route, Switch, withRouter } from 'react-router-dom';
import MedicineCabinet from './components/MedicineCabinet';
import LogList from './components/LogList';
import LogForm from './components/LogForm';




class App extends React.Component {
  

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return(
      <div className="app">
        {/* Router parent in index around app component */}
          <Switch>
              <Route exact path="/medicine-cabinet" component={MedicineCabinet}></Route>
              <Route exact path="/logs/new" component={LogForm}></Route>
              <Route exact path="/logs" component={LogList}></Route>
              <Route path="/login" component={Login}></Route>
              <Route exact path="/" render={(props) => this.props.loggedIn? <UserDashboard {...props}/> : <Home {...props}/>}></Route>
      
          </Switch>
    
      </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

// do I need withRouter?
