import React from 'react';
import Friend from './Friend';


export const FriendList = props => {
    return(
        <div>
           
                {props.friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })}
        
        </div>
       
    )
}

