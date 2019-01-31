import React from 'react';
import { connect } from 'react-redux';
import { addNewFriend } from '../actions';

class FriendsList extends React.Component{
    state = {
        newFriend: ''
    }

    handleChanges = e => {
        this.setState({ newFriend: e.target.value })
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addNewFriend(this.state.newFriend);
    }

    render(){
        return(
            <>
            <h1>These Are My Friends, My Only Friends</h1>
            <div>
                {this.props.friends.map(friend => {
                    return <div>{friend.name}</div> ;
                })}
            </div>
            <input 
            type="text"
            value={this.state.newFriend}
            onChange={this.handleChanges}
            />
            <button onClick={this.addFriend}>Add A Friend Here</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends
});

export default connect(
    mapStateToProps,
    { addNewFriend }
    )(FriendsList);