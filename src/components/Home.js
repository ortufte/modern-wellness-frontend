import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import UserDashboard from './UserDashboard';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCurrentUser } from '../actions/currentUser';
import HomeNav from './HomeNav';



class Home extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
      }

    render() {
        return (
            <div className="home">

                <HomeNav />
                <Switch>
                    <Route exact path="/signup" component={SignUp}></Route>                    
                    <Route exact path="/login" component={Login}></Route>            
                    <Route path="/users/:userId" render={props => <UserDashboard {...props}/>}></Route>
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      loggedIn: !!state.currentUser
    }
  }

  export default connect(mapStateToProps, { getCurrentUser })(Home);