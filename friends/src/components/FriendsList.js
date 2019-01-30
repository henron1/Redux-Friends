import React from 'react';
import { connect } from 'react-redux';

class FriendsList extends React.Component{
    constructor(){
        super();
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addFriend = e => {
        e.preventDefault();
    }

    render(){
        return(
            <>
            <h1>These Are My Friends, My Only Friends</h1>
            <div>
                {this.props.friends.map(friend => {
                    {friend.name}
                })}
            </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friendReducer.friends
});

export default connect(
    mapStateToProps,
    { addNewFriend }
    )(FriendsList);