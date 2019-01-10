import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name:"Maxi",age:20},
      { name:"Manu",age:36},
      { name:"Stef",age:41},

    ]
  }

  switchNameHandler = () => {
    console.log("klik");
    this.setState({
      persons: [
        { name:"Seb",age:20},
        { name:"Manu",age:36},
        { name:"Stef",age:41},
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi</h1> 
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
