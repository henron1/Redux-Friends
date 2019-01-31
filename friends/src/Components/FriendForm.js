import React from 'react';
import {withRouter} from 'react-router';
function FriendForm(props) {
    const handleClick = ev => {
        ev.preventDefault();
        props.addNewFriend();
    }

    return (
        <div>

            <form action=''>
                <input 
                    type="text"
                    name="name"
                    onChange={props.changeHandler}
                    placeholder="name"
                    value={props.friend.name}
                />

                <input 
                    type="text"
                    name="email"
                    onChange={props.changeHandler}
                    placeholder="email"
                    value={props.friend.email}
                />

                <button onClick={handleClick}>Add A Friend</button>
            </form>     


        </div>
    )
}

export default withRouter(FriendForm);