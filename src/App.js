import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Home from './components/Home';
import { getCurrentUser } from './actions/currentUser';
import { Switch, Route } from 'react-router-dom';
import GuardedRoute from './components/GuardedRoute';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={SignUp}></Route>                    
          <Route exact path="/login" component={Login}></Route> 
          <GuardedRoute path="/users/:userId" component={UserDashboard} />           
          {/* <Route path="/users/:userId" render={props => <UserDashboard {...props}/>}></Route> */}
        </Switch>
    </div>

    );
  }
}

export default connect(null, { getCurrentUser })(App);

