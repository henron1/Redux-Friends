import {
    FRIEND_FETCH,
    FRIEND_SUCCESS,
    FRIEND_FAILURE,
    FRIEND_ADD,
    FRIEND_ADD_SUCCESS,
    FRIEND_ADD_FAILURE
} from '../Actions';


const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    updatingFriend: true,
    friendUpdated: false,
    addingNewFriend: false,
    newFriendAdded: true,
    updateID: null,
    error: null
  };

export const FriendReducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIEND_FETCH:
            return{
                ...state,
                error:'',
                fetchingFriends:true,
                friendsFetched: false
            };
        case FRIEND_SUCCESS:
            return{
                ...state,
                error:'',
                fetchingFriends:false,
                friendsFetched:true,
                friends: action.payload
            };
        case FRIEND_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            };
        case FRIEND_ADD:
            return {
                ...state,
                addingNewFriend: true,
                error:''
            };
        case FRIEND_ADD_SUCCESS:
            return {
                ...state,
                addingNewFriend: false,
                newFriendAded: true,
                error:''
            };
        case FRIEND_ADD_FAILURE:
            return {
                ...state,
                newFriendAdded: false,
                addingNewFriend:false
            };
        default:
            return state;
    }
}