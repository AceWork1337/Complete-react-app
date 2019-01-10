import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1> 
        <Person name="Max" age="26"/>
        <Person name="Manu" age="36">My Hobbies.</Person>
        <Person name="Stef" age="46"/>
      </div>
    );
  }
}

export default App;
