import React from 'react';
import HOD from './HOD';

function WithCounter(props) {

  return (
    <div>
      <button onClick={props.handleInc}>click me {props.count}</button>
    </div>
  )
}

export default HOD(WithCounter)
