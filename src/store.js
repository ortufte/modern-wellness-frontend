import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 
import currentUserReducer from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signUpForm from './reducers/signUpForm';
import newLogForm from './reducers/newLogForm';
import userLogs from './reducers/userLogs';


const reducer = combineReducers({
  currentUser: currentUserReducer,
  loginForm: loginForm,
  signUpForm: signUpForm,
  newLogForm: newLogForm,
  userLogs: userLogs,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store