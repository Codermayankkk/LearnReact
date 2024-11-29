import React, { useState, useTransition } from 'react';

function USETransition() {
    const [name, setName] = useState("");
    const [lists, setLists] = useState([]);
    const [isPending, startTransition] = useTransition();
    const list_size = 20000;
 
    const handleChange = (e) => {
        const{ value } = e.target;
        setName(value);

      //delay
      startTransition(() => {
        const dataList = [];
      
        for (let i = 0; i < list_size; i++) {
            dataList.push(value);
        }
    
        setLists(dataList);
      })  
    }    

  return (
    <div>
      <input type="text" onChange={handleChange} value={name} key="input"/>
      {
        isPending ? (<div>Loading...</div>) :
        lists.map((list, index) => {
            return <div key={index}>{list}</div>;
        })
      }
    </div>
  )
}

export default USETransition
