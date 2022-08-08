import React from 'react';
import Login from './Login';
import { ProfileProps } from './Profile';


type PrivateProps ={
    isloggedin:boolean,
    Component:React.ComponentType<ProfileProps>
}

const Private = ({isloggedin,Component}:PrivateProps) => {
   if (isloggedin){
    return <Component name='Soyeb'/>
   }else{
    return <Login/>
   }
};

export default Private;