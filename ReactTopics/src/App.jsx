import { useState } from 'react';
import NewCom from './NewCom';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const IncHandle = () => {
         setCount(count+1);
  }
   
  const valFun = (e) => {
       setInput(e.target.value);
  }

  return (
    <>
       <h1>{count}</h1>
       <button onClick={IncHandle}>Add</button>
       <br/><br/>
       <input type="text" onChange={valFun} value={input}/>
       <h3>{input}</h3>
       <hr/>
       <NewCom/>
    </>
  )
}

export default App
