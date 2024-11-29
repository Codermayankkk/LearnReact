import React, { useEffect, useRef, useState } from 'react';

function USeRef() {
    const [input, setInput] = useState("");
    const render = useRef(0);
    
    useEffect(() => {
        render.current = render.current+1;
    })

  return (
    <div>
      <input type="text" value={input} onChange={(e) => {
        setInput(e.target.value);
      }}/>
      <p>The component rendered {render.current} times</p>
    </div>
  )
}

export default USeRef
