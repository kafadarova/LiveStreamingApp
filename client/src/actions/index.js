import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

// action sign in
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

// action sign out
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// action -  create a stream on form submit
// post request to streams endpoint
export const createStream = formValues => async (dispatch, getState) => {
  // get the user id from the auth property in the state object
  const { userId } =getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

 dispatch({ type: CREATE_STREAM, payload: response.data});
 // navigate the user to the list of streams after creating one
 history.push('/');
}

// get all the records
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data});
}

// get one record by id
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data});
}

// edit a record by id
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({type: EDIT_STREAM, payload: response.data});
}

// delete a record by id - get nothing back
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({type: DELETE_STREAM, payload: id});
}
