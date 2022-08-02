import React from 'react';
type buttonProps ={
     handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number) =>void
}

const Button = (props:buttonProps) => {
    return (
        <div>
            <button onClick={event=>props.handleClick(event,1)}> Click </button>
        </div>
    );
};

export default Button;