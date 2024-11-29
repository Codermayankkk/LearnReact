import React, { useMemo, useState } from 'react';

function UseMemo() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
  
    const IncHandle = () => {
           setCount(count+1);
    }
     
    const valFun = (e) => {
         setInput(e.target.value);
    }

   const result =  useMemo(function slowFunction(){
    let sum = 0;
         for (let i = 0; i < 1000000; i++) 
        {
             sum += i;
        }
            console.log("hello");
            return sum;
    },[])
  result;

    return (
      <>
         <h1>{count}</h1>
         <button onClick={IncHandle}>Add</button>
         <br/><br/>
         <input type="text" onChange={valFun} value={input}/>
         <h3>{input}</h3>
         <hr/>
         {result}
      </>
    )
}

export default UseMemo
