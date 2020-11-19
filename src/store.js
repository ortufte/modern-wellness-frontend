import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 
import currentUserReducer from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signUpForm from './reducers/signUpForm';
import logForm from './reducers/logForm';
import userLogs from './reducers/userLogs';
import medicineForm from './reducers/medicineForm';
import userMedicines from './reducers/userMedicines';



const reducer = combineReducers({
  currentUser: currentUserReducer,
  loginForm: loginForm,
  signUpForm: signUpForm,
  logForm: logForm,
  userLogs: userLogs,
  medicineForm: medicineForm,
  userMedicines: userMedicines
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store