import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

class Person extends Component { 
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
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
     
    render () {
        return  (
            
                <div className="Persons" >
                    <p onClick={this.props.click}>I'm a {this.props.name} with {this.props.age} years and
                        own {Math.floor(Math.random()*30)} cars!
                    </p>
                    <p>{this.props.children}</p>
                    <input type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/>
                </div>
        )
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}
export default Person;