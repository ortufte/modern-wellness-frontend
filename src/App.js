import React, { useEffect }from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Home from './components/Home';
import { getCurrentUser } from './actions/currentUser';
import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './components/UserDashboard';

const App = ({ getCurrentUser }) => {

  useEffect(() => {
    getCurrentUser()
  }, [])

    return(
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/users/:userId" component={UserDashboard} /> 
          <ProtectedRoute component={Home} />
        </Switch>
    </div>

    );
}

export default connect(null, { getCurrentUser })(App)