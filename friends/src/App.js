import React, { Component } from 'react';
import './App.css';

// import views
import FriendsListView from './views/FriendsListView';
import FormView from './views/FormView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendsListView />
      <FormView />
      </div>
    );
  }
}

export default App;
