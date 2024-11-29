import React, { useContext } from 'react';
import { greetContext } from './A';

function D() {
    const useCon = useContext(greetContext);
  return (
    <div>
        <h1>Jai Ranjeet {useCon.mayank}</h1>
        <h2>{useCon.hii}</h2>
    </div>
  )
}

export default D
