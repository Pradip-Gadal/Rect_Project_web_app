import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ClockTicking = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        console.log('.')
        setCount(x => x + 1);
    }

    useEffect(() => {

        const sec = setInterval(tick, 1000);
        return () => {
            clearInterval(sec);
        }
    },[])
  return (
    <div>
      {count}
    </div>
  )
}

export default ClockTicking;
