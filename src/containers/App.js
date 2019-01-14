import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { id: "aasdasdas", name: "Maxi", age: 20 },
      { id: "saddasdasdas", name: "Manu", age: 36 },
      { id: "vacdasdas", name: "Stef", age: 41 },
    ],
    showPerson: false
  }

  // switchNameHandler = (newName) => {
  //   console.log("klik");
  //   this.setState({
  //     persons: [
  //       { name:newName,age:20},
  //       { name:"Manu",age:36},
  //       { name:"Stef",age:41},
  //     ]
  //   });
  // }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersons = () => {
    this.setState({ showPerson: !this.state.showPerson })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          {/* { this.state.persons.map((person, index) => {
            return (
              <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}  
              changed={(event) =>this.nameChangedHandler( event, person.id )}            
              />
            )
          }) } */}
          {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Fet")}
              changed={this.nameChangedHandler}>
              
              My Hobbies.
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/> */}
        </div>
      )
    }
    return (
      <div className={"App"}>
        <Cockpit toggle={this.togglePersons} />
        {persons}
      </div>
    );
  }
}

export default App;
