import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL
} from '../actions';

const initialState = {
    friends: []
}

const friends = (state = initialState, action) => {
    switch (action.type){
        case FETCH_FRIENDS_SUCCESS:
        return {
            ...state,
            friends: action.payload
        }

        default:
        return state;
    }
}

export default friends;