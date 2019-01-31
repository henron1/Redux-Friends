import React from 'react';

function FriendsList(props){
    return(
        <div className="friendWrapper">
            {props.friends.map(friend => (
                <div>{friend.name}</div>
            ))}
        </div>
    );
}

export default FriendsList;