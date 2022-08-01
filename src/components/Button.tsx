import React from 'react';
type buttonProps ={
     handleClick:() =>void
}

const Button = (props:buttonProps) => {
    return (
        <div>
            <button onClick={props.handleClick}> Click </button>
        </div>
    );
};

export default Button;