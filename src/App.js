import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    
    return(
      <div className="app">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>            
            <Route path="/users/:userId" render={props => <UserDashboard {...props}/>}></Route>
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

export default connect(mapStateToProps, { getCurrentUser })(App);

