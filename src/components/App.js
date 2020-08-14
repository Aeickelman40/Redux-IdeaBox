import React, { Component } from 'react';
import AddToDoForm from '../containers/AddToDoForm';
import ToDoList from '../containers/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;

