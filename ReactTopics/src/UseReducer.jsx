import React, { useReducer } from 'react';

const reducer = (state, action) => 
{
   if(action.type === "incr")
   {
    return {count : state.count+1}
   }
   if(action.type === "decr")
    {
     return {count : state.count-1}
    }
}

function UseReducer() {
    // const [count, setCount] = useState(0);
    
    const [state, dispatch] = useReducer(reducer, {count:0});

    const IncHandle = () => {
        dispatch({type:"incr"});
 }

 const DecHandle = () => {
    dispatch({type:"decr"});
}
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={IncHandle}>Add</button>
      <button onClick={DecHandle}>Remove</button>
    </>
  )
}

export default UseReducer
