import React, { useRef } from 'react';

function UseRef3() {

    const inputEl = useRef("");

    const handleF = () =>{
        inputEl.current.style.color = "blue";
        // inputEl.current.style.borderColor = "black";
    }
    
    const handleB = () =>{
        inputEl.current.style.color = "red";
    }

  return (
    <div>
        <input ref={inputEl} type="text" onFocus={handleF} onBlur={handleB}/>
    </div>
  )
}

export default UseRef3
