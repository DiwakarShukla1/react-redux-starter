import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoListContainer, AddTodoContainer, LoginContainer} from './containers';

class App extends Component {
  render() {
    return (
      <div className="Apsp">
        <TodoListContainer />
        <AddTodoContainer />
        <LoginContainer />
      </div>
    );
  }
}

export default App;
