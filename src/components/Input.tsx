import React from 'react';
type InputProps={
    value:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props:InputProps) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.onChange} />
        </div>
    );
};

export default Input;