import React from 'react';
type GreetProps ={
name:string;
}

const Greet = (props:GreetProps) => {
    return (
        <div>
          <h2>  Welcome Back {props.name}! </h2>
        </div>
    );
};

export default Greet;