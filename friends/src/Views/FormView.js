import React from 'react';
import { connect } from 'react-redux';

import FriendForm from '../Components/FriendForm';
import {addNewFriend} from '../Actions/Actions';

const newFriendInfo ={
    name:'',
    age:'',
    email:''
}

class FormView extends React.Component {
    state = {
        friend: {
           
            name:'',
            email:'',
        }
    };

    changeHandler = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    addNewFriend = () => {this.props.addFriend(this.state.friend)}

    render() {
        return(
            <FriendForm addNewFriend={this.addNewFriend}
            changeHandler={this.changeHandler}
            friend={this.state.friend}
            />
        );
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    { addNewFriend }
)(FormView);