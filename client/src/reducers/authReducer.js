import {AUTH_SUCCESS, SET_AUTH_TOKEN} from '../actions/auth';

const initialState = {
  currentUser: null,
  authToken: null,
  error: null
};

function authReducer(state = initialState, action) {
  switch(action.type) {
    case AUTH_SUCCESS: 
      return {
        ...state,
        currentUser: action.currentUser
      }
    case SET_AUTH_TOKEN: 
      return {
        ...state,
        authToken: action.authToken
      }
    default: return state;
  }
}

export default authReducer;