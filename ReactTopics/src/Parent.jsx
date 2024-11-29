import React, { useRef } from 'react';
import Child from './Child';

function Parent() {
    const childRef = useRef(null);

    function handleOpenModal(val){
              childRef.current.openModal(val);
    }

  return (
    <div>
      <Child ref={childRef}/>

      <p>This is parent</p>

      <button onClick={() => {
        handleOpenModal(true)}}>Open Modal</button>
    </div>
  )
}

export default Parent
