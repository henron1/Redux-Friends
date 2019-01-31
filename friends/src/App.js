import React, { Component } from 'react';
import './App.css';
import FriendsListView from './views/FriendsListView';
import FormView from './Views/FormView';
import {Route} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={FriendsListView} /> 
        <Route path="/" render={props => (<FormView {...props} />)}/>
      </div>
    );
  }
}

export default App;
