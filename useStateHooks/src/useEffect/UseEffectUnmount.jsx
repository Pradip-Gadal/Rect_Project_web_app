import React, { useState } from 'react'
import UseEffect from './UseEffect';

const UseEffectUnmount = () => {
    const [display, setDispaly] = useState(true);

  return (
    <div>
      <button onClick={() => setDispaly(!display)}>unmount</button>
      {display && <UseEffect />}
    </div>
  )
}

export default UseEffectUnmount
