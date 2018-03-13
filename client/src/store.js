import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
// import local storage
import authReducer from './reducers/authReducer';
import exerciseReducer from './reducers/exerciseReducer';
// import setAuth and refreshAuth

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    exercise: exerciseReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store;