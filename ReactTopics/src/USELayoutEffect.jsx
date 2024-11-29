import React, { useEffect, useLayoutEffect } from 'react';

function USELayoutEffect() {

    useEffect(() => {
        console.log("Hello useEffect");
      })
      
    useEffect(() => {
      console.log("Hello useEffect");
    })

    useLayoutEffect(() => {
        console.log("Hello useLayoutEffect");
    })

    useLayoutEffect(() => {
        console.log("Hello useLayoutEffect");
    })

  return (
    <div>
      
    </div>
  )
}

export default USELayoutEffect
