import axios from 'axios';

export const ADD_FRIEND = 'ADD_FRIEND';
export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export function addNewFriend(newFriend){
    console.log('action', newFriend);
    return{
        type: ADD_FRIEND,
        payload: newFriend
    };
}

export const getFriendList = () => dispatch =>{
    dispatch ({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => 
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data})
            )
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err}))
}