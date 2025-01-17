import React, { forwardRef, useImperativeHandle, useState } from 'react';

function Child(props, ref) {
    
    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, ()=>({
        openModal:(val) =>{
            setOpenModal(val)
        }
    }))

    if(!openModal) return null;

  return (
    <div>
      <p>This is modal</p>

      <button onClick={() => {
        setOpenModal(false)
      }}>Close Modal</button>
    </div>
  )
}

export default forwardRef(Child)
