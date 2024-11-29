import React, { createContext } from 'react';
import B from './B';

const greetContext = createContext();

function A() {
    const mayank = ", from Mayank";
    const hii = "Hii"
  return (
    <div>
      <greetContext.Provider value={{mayank,hii}}>
      <B/>
      </greetContext.Provider>  
    </div>
  )
}

export default A
export { greetContext };

