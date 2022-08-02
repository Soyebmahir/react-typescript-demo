import React from 'react';
import { useState } from 'react';

type userProps={
    name:string
    email:string
}

const User = (props:userProps) => {
const [user,setUser]=useState<null | userProps>(null)
const loggedIn=()=>{

    setUser({
        name:props.name,
        email:props.email
    })
}
const loggedOut=()=>{

    setUser(null)
}
return (
        <div>
            <button onClick={loggedIn}>Login</button>
            <button onClick={loggedOut}>Logout</button>
            {
                user?`${props.name} ${props.email}`:'Please Login'
            }

        </div>
    );
};

export default User;