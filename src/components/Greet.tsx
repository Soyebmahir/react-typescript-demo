import React from 'react';
type GreetProps ={
name:string;
massageCount?:number;
isLoggedIn:boolean;
}

const Greet = (props:GreetProps) => {
  const {massageCount=0} =props
    return (
        <div>
          <h2> {props.isLoggedIn? ` Welcome Back {props.name}! You have {massageCount} unread massage.`:'Welcome Guest'} </h2>
        </div>
    );
};

export default Greet; 