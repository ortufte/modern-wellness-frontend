import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 
import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signUpForm from './reducers/signUpForm';



const reducer = combineReducers({
  users: usersReducer, //the users key will be what shows up in the redux store 
  currentUser: currentUserReducer,
  loginForm: loginForm,
  signUpForm: signUpForm,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)))

export default store