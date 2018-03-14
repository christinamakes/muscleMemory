// import {SubmissionError} from 'redux-form'

import {API_BASE_URL} from '../config'
import {normalizeResponseErrors} from './utils'
console.log(API_BASE_URL);

export const GET_WORKOUT_SUCCESS = 'GET_WORKOUT_SUCCESS';
export const getWorkoutSuccess = data => ({
    type: GET_WORKOUT_SUCCESS,
    data
});

export const GET_WORKOUT_ERROR = 'GET_WORKOUT_ERROR';
export const getWorkoutError = error => ({
    type: GET_WORKOUT_ERROR,
    error
});

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

export const COMPLETE_WORKOUT_SUCCESS = 'COMPLETE_WORKOUT_SUCCESS';
export const completeWorkoutSuccess = data => ({
    type: COMPLETE_WORKOUT_SUCCESS,
    data
});

export const COMPLETE_WORKOUT_ERROR = 'COMPLETE_WORKOUT_ERROR';
export const completeWorkoutError = error => ({
    type: COMPLETE_WORKOUT_ERROR,
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
      Authorization: `Bearer ${authToken}`
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

export const completeWorkout = (workout) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id
  console.log('adding workout to user' + workout)
  return fetch(`${API_BASE_URL}/users?userId=${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({
      recentWorkout: workout, 
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({data}) => dispatch(completeWorkoutSuccess(data)))
  .catch(err => {
    // const {reason, message, location} = err;
    console.log(err)
    dispatch(completeWorkoutError(err));
    }
  );
};

export const getWorkouts = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id
  return fetch(`${API_BASE_URL}/workout?userId=${userId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(getWorkoutSuccess(data)))
  .catch(err => {
    console.log(err)
    dispatch(getWorkoutError(err));
  });
}