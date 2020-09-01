import { GET_GOALS, ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, GOALS_LOADING } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getGoals = (userId) => dispatch => {
  dispatch(setGoalsLoading());
  axios.get(`/api/goals/${userId}`)
    .then(res => dispatch({
      type: GET_GOALS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addGoal = goal => (dispatch, getState) => {
  axios.post(`/api/goals/${goal.userId}/add`, goal, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_GOAL,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const updateGoal = goal => (dispatch, getState) => {
  axios.post(`/api/goals/update/${goal._id}`, goal, tokenConfig(getState))
    .then(res => dispatch({
      type: UPDATE_GOAL,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteGoal = id => (dispatch, getState) => {
  axios.delete(`/api/goals/delete/${id}`, tokenConfig(getState))
    .then(res => dispatch({
      type: DELETE_GOAL,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setGoalsLoading = () => {
  return {
    type: GOALS_LOADING
  };
};