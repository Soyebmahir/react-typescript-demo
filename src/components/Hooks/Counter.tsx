import { useReducer } from "react";
const initialState ={count:0}

type counterState ={
    count:number
}

type updateCounter={
    type:'increment'|'decrement'
    payload:number
}

type resetCounter={
    type:'reset'
}

type counterAction=updateCounter|resetCounter

function reducer(state :counterState, action:counterAction){
    switch (action.type){
        case 'increment':
            return {count:state.count + action.payload}
        case 'decrement':
            return {count:state.count - action.payload}
        case 'reset':
        return initialState
        default:
            return state
    }
}

const Counter = () => {
     const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <>
          Count : {state.count}
          <button onClick={()=>dispatch({type:'increment' ,payload:10})}>Increment 10</button>  
          <button onClick={()=>dispatch({type:'decrement' ,payload:10})}>Decrement 10</button>  
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>  
        </>
    );
};

export default Counter;