import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT} from './types';

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

// action create a stream on form submit
 // post request to streams endpoint
export const createStream = formValues => async dispatch => {
 streams.post('/streams', formValues);
}
