import React from 'react';

function NewCom() {
    console.log("Hello renders");
    
  return (
    <div>
      <h2>Hello </h2>
    </div>
  )
}

export default React.memo(NewCom)
