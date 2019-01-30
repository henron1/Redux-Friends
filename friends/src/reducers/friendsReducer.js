import { ADD_FRIEND } from '../actions';

const initialState = {
    friends: []
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FRIEND:
        const newFriend = {
            name: action.payload
        }
        return {
            ...state,
            friends: [...state.friends, newFriend]
        }

        default:
            return state;
    }
}