import React, { useRef } from 'react';

function UseRef2() {
  const refer = useRef(0);

  const handle = () => {
        refer.current = refer.current +1;
        console.log(`click ${refer.current} me`);
  }

  return (
    <div>
      <button onClick={handle}>click me</button>
    </div>
  )
}

export default UseRef2
