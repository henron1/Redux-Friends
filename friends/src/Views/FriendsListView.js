import React from 'react';
import { connect } from 'react';
import { FriendList } from '../Components/FriendComponent';
import { getFriend } from '../Actions/Actions';

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

const mapStateToProps = state => ({
    friends:state.friends
})

export default connect (
    mapStateToProps,
     { getFriend } 
     )(FriendListView);
