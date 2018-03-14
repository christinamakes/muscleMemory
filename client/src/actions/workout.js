// import {SubmissionError} from 'redux-form'

import {API_BASE_URL} from '../config'
import {normalizeResponseErrors} from './utils'
console.log(API_BASE_URL);

export const NEW_WORKOUT_SUCCESS = 'NEW_WORKOUT_SUCCESS';
export const newWorkoutSuccess = data => ({
    type: NEW_WORKOUT_SUCCESS,
    data
});

export const NEW_WORKOUT_ERROR = 'NEW_WORKOUT_ERROR';
export const newWorkoutError = error => ({
    type: NEW_WORKOUT_ERROR,
    error
});

export const newWorkout = (workoutName, exercises) => (dispatch, getState) => {
  console.log('sending workout with ' + exercises)
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id
  console.log(authToken);


  return fetch(`${API_BASE_URL}/workout`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      workoutName, 
      exercises,
      userId
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({data}) => dispatch(newWorkoutSuccess(data)))
  .catch(err => {
    // const {reason, message, location} = err;
    console.log(err)
    dispatch(newWorkoutError(err));
    }
  );
};

// export const getExercises = () => dispatch => {
//   return fetch(`${API_BASE_URL}/exercise`, {
//     method: 'GET'
//   })
//   .then(res => normalizeResponseErrors(res))
//   .then(res => res.json())
//   .then((data) => dispatch(newExerciseSuccess(data)))
//   .catch(err => {
//     const {reason, message, location} = err;
//     if (reason === 'ValidationError') {
//       return Promise.reject(
//         new SubmissionError({
//           [location]: message
//         })
//       );
//     }
//     dispatch(newExerciseError(err));
//   });
// }