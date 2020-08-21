import { GET_ENTRIES, ADD_ENTRY, DELETE_ENTRY, ENTRIES_LOADING } from './types';
import axios from 'axios';

export const getEntries = () => dispatch => {
  dispatch(setEntriesLoading());
  axios.get('/api/entries')
    .then(res => dispatch({
      type: GET_ENTRIES,
      payload: res.data
    }))
    .catch(err => console.log(err));
};

export const addEntry = entry => dispatch => {
  axios.post('/api/entries/add', entry)
    .then(res => dispatch({
      type: ADD_ENTRY,
      payload: res.data
    }))
    .catch(err => console.log(err));
};

export const deleteEntry = id => dispatch => {
  axios.delete(`/api/entries/delete/${id}`)
    .then(res => dispatch({
      type: DELETE_ENTRY,
      payload: id
    }))
    .catch(err => console.log(err));
};

export const setEntriesLoading = () => {
  return {
    type: ENTRIES_LOADING,
  };
};