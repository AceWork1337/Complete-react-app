import React from 'react';



const person = (props) => {
    return <p>I'm a {props.name} with {props.age} years and own {Math.floor(Math.random()*30)} cars!</p>
}

export default person;