import React from 'react';
import { connect } from 'react-redux';
import { addNewFriend } from '../actions';

class FriendsList extends React.Component{
    state = {
        newFriend: ''
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
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
            <h2>Oops No One Is Here</h2>
            </div>
            <input 
            type="text"
            value={this.state.newFriend}
            onChange={this.handleChanges}
            />
            <button>Add A Friend Here</button>
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