import {NEW_EXERCISE_ERROR, NEW_EXERCISE_SUCCESS} from '../actions/exercises';

const initialState = {
  submittedExercise: false
};

function authReducer(state = initialState, action) {
  switch(action.type) {
    case NEW_EXERCISE_SUCCESS: 
      return {
        ...state,
        submittedExercise: true
      }
    case NEW_EXERCISE_ERROR: 
      return {
        ...state
      }
    default: return state;
  }
}

export default authReducer;