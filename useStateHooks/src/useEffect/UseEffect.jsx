import React, { useState, useEffect } from 'react'

const UseEffect = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const pointerPosition = (e) => {
    console.log('positionUpdated')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('mounted');
    window.addEventListener('mousemove', pointerPosition)

    return() => {
      console.log(`unmount`)
      window.removeEventListener('mousemove', pointerPosition)
    }
  }, [])
  return (
    <div>
      <h1>x-{x} y-{y}</h1>
    </div>
  )
}

export default UseEffect
