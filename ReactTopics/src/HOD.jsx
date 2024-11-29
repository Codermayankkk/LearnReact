import React, { useState } from 'react';

function HOD(OriginalComponent) {

  const enhancedComponent = () => {
    const [count, setCount] = useState(0);
     
     const handleInc = () =>{
        setCount(count+1);
     }

     return (
        <OriginalComponent handleInc={handleInc} count={count}/>
     )
  }

  return enhancedComponent;
}

export default HOD
