import React from 'react';
type PersonProps ={
    name:{
        first:string,
        second:string
    }
}

const Person = (props:PersonProps) => {
    return (
        <div>
            <h2>{props.name.first} {props.name.second}</h2>
        </div>
    );
};

export default Person;