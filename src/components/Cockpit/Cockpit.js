import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'lightgreen',
        border: '1px solid pink',
        cursor: 'pointer',

    }
    return (
        <div>
            <h1>Hi</h1>
            <button
                style={style}
                // onClick={() => this.switchNameHandler("Seb")}
                onClick={props.toggle}
            >Show Persons</button>
        </div>
    );
};

export default cockpit