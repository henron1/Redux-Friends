import React from 'react';
import { connect } from 'react';
import { FriendList } from '../Components/FriendComponent';

class FriendListView extends React.Component {
    state= {
        friends: []
    };

    componentDidMount() {
        this.props.getFriendList();
    }

    render() {
        return (
            <FriendList 
            friends={this.props.friends}
            history={this.props.hisotry}
            />
        )
    }
}