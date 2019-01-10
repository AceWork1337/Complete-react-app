import React from 'react';



const person = (props) => {
    return  <div>
                <p>I'm a {props.name} with {props.age} years and
                    own {Math.floor(Math.random()*30)} cars!
                </p>
                <p>{props.children}</p>
            </div>
}

export default person;