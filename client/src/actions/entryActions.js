import { GET_ENTRIES, ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY, ENTRIES_LOADING } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getEntries = (userId) => dispatch => {
  dispatch(setEntriesLoading());
  axios.get(`/api/entries/${userId}`)
    .then(res => dispatch({
      type: GET_ENTRIES,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addEntry = entry => (dispatch, getState) => {
  axios.post(`/api/entries/${entry.userId}/add`, entry, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_ENTRY,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const updateEntry = entry => (dispatch, getState) => {
  axios.post(`/api/entries/update/${entry._id}`, entry, tokenConfig(getState))
    .then(res => dispatch({
      type: UPDATE_ENTRY,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteEntry = id => (dispatch, getState) => {
  axios.delete(`/api/entries/delete/${id}`, tokenConfig(getState))
    .then(res => dispatch({
      type: DELETE_ENTRY,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setEntriesLoading = () => {
  return {
    type: ENTRIES_LOADING,
  };
};