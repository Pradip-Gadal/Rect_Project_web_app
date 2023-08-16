

import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const name = ['pradip', 'pramila', 'ishita', 'prasant', 'ishak', 'pranisha'];
  const [searchValue, setSearchValue] = useState('');

  const searchFilter = name.filter((x)=> x.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <>
      <div>
          <input onChange={(event) => setSearchValue(event.target.value)} placeholder='search here...' />
      </div>
      <ol>
      {searchFilter.map((val)=> 
        <li>{val}</li>
      )}
      </ol>
      
    </>
    
  )
}

export default App


