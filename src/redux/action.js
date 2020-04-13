import axios from 'axios';
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constant'

export function fetchUser() {
    return {
        type: FETCH_USERS,
        loading: true,
    }
}

export function fetchUserSuccess(data) {
    return {
        type: FETCH_USERS_SUCCESS,
        loading: false,
        payload: data
    }
}

export function fetchUserFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        loading: false,
        payload: error
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUser())
      axios
        .get('http://localhost:3001/members')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUserFailure(error.message))
        })
    }
  }