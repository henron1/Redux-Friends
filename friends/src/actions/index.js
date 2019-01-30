export const ADD_FRIEND = 'ADD_FRIEND';

export function addNewFriend(newFriend){
    console.log('action', newFriend);
    return{
        type: ADD_FRIEND,
        payload: newFriend
    };
}