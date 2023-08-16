import React, { useState, useEffect } from 'react';

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const pointerLocation = (e) => {
    console.log('pointer')
    setX(e.clientX)
    setY(e.clientY)
  };

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('mousemove', pointerLocation);
    
    return() => {
      window.removeEventListener('mousemove', pointerLocation)
    }
  }, [])
  return (
      <div>
        <h1>X-coordinates : {x}</h1>
        <h1>Y-coordinates: {y}</h1>
     </div>  
  )
}

export default App;