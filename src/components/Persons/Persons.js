import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log("Inside constructor personsjs", props);
  }
  componentWillMount(){
    console.log("Inside component will mount personsjs");
  }
  componentDidMount(){
    console.log("Inside component did mount personsjs");
  }
  componentWillReceiveProps(nextProps){
    console.log("update person.js", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("Should component update ", nextProps,nextState)
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("component will update", nextProps, nextState);
  }
  componentDidUpdate(){
    console.log("component DID update");

  }
  render () {
    console.log(" render personsjs");

    return  this.props.persons.map((person, index) => {
            return <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}  
              changed={(event) => this.props.changed( event, person.id )}            
              />
              
            });
    }
  }
  export default Persons;