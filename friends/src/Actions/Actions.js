import axios from 'axios';
export const FRIEND_FETCH = 'FRIEND_FETCH';
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS';
export const FRIEND_FAILURE = 'FRIEND_FAILURE';
export const FRIEND_ADD = 'FRIEND_ADD';
export const FRIEND_ADD_SUCCESS = 'FRIEND_ADD_SUCCESS';
export const FRIEND_ADD_FAILURE = 'FRIEND_ADD_FAILURE';

export const getFriend = () => dispatch => {
    dispatch({type: FRIEND_FETCH});
    axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type:FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type:FRIEND_FAILURE, payload: err }));
};

export const addNewFriend = payload => dispatch => {
    dispatch({type: FRIEND_ADD })
    axios
    .post("http://localhost:5000/api/friends", payload)
    .then(res => dispatch({ type: FRIEND_ADD_SUCCESS, payload:res.data }))
    .catch(err => dispatch({ type: FRIEND_ADD_FAILURE, payload: err.data }));
};
    
