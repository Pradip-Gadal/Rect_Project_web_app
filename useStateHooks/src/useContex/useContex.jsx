import React, { useContext } from 'react';
import { UserContex } from '../main';
import { manageContext } from '../App';


const UseContex = () => {
    const value = useContext(UserContex);
    const num = useContext(manageContext);


  return (
    <div>
      {value}
        {num.map((i) =>
            <p key={i}>{i}</p>)}
    </div>
  )
}

export default UseContex;
