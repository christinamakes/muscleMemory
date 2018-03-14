import {NEW_WORKOUT_ERROR, NEW_WORKOUT_SUCCESS, GET_WORKOUT_ERROR, GET_WORKOUT_SUCCESS, GET_MUSCLES_ERROR, GET_MUSCLES_SUCCESS} from '../actions/workout';

const initialState = {
  workouts: null,
  muscles: null
};

function workoutReducer(state = initialState, action) {
  switch(action.type) {
    case GET_WORKOUT_SUCCESS: 
      return {
        ...state,
        workouts: action.data
      }
    case GET_WORKOUT_ERROR: 
      return {
        ...state
      }
    case GET_MUSCLES_SUCCESS: 
      return {
        ...state,
        muscles: action.data
      }
    case GET_MUSCLES_ERROR: 
      return {
        ...state
      }
    default: return state;
  }
}

export default workoutReducer;