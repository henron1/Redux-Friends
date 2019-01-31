import React from 'react';

const Friend = props => {
    return (
        <div>
            <li>{props.friend.name}</li>
            <li>{props.friend.email}</li>
        </div>
    )
}