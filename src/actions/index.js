import axios from 'axios';
import { hashHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3080';

export function signinUser({email, password}) {
   return function(dispatch) {
   //Submit email and password to server
   axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(res => {
         //if request is good...
         //update state to authenticated
         dispatch({type: AUTH_USER});
         //Save token
         // console.log(res.data.token);
         localStorage.setItem('token', res.data.token);
         //Redirect to route /feature
         hashHistory.push('/feature');
      })
      .catch(() => {
         //If request is bad..
         //Show error to a user
         dispatch(authError("BadLoginInfo"))
      })
   }
}

export function signupUser({email, password}) {
   return function(dispatch) {
   //Submit email and password to server
   axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(res => {
         //if request is good...
         //update state to authenticated
         dispatch({type: AUTH_USER});
         //Save token
         // console.log(res.data.token);
         localStorage.setItem('token', res.data.token);
         //Redirect to route /feature
         hashHistory.push('/feature');
      })
      .catch(() => {

         //If request is bad..
         //Show error to a user
         dispatch(authError("This email is in use"));

      })
   }
}

export function authError(error) {
   return {
      type: AUTH_ERROR,
      payload: error
   }
}

export function signoutUser() {
   localStorage.removeItem('token');
   return { type: UNAUTH_USER}
}
