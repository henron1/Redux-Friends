import React from 'react';
import { connect } from 'react-redux';

import { getFriendList } from '../actions';

import FriendsList from '../components/FriendsList';

class FriendsListView extends React.Component{
    state = {
        friends: []
    };

    componentDidMount(){
        this.props.getFriendList();
    }

    render(){
        return(
            <FriendsList 
            friends={this.props.friends}
            history={this.props.history}
            />
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(
    mapStateToProps,
    { getFriendList }
)(FriendsListView);
