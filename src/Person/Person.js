import React from 'react';

import './Person.scss';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
    return  <div className="Persons" >
                <p onClick={props.click}>I'm a {props.name} with {props.age} years and
                    own {Math.floor(Math.random()*30)} cars!
                </p>
                <p>{props.children}</p>
                <input type="text" 
                    onChange={props.changed} 
                    value={props.name}/>
            </div>
}

export default person;