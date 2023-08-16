import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(1);
  const [fetch, setFetch] = useState(1)

  useEffect(() => {

    axios
    .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(res => setUser(res.data))
    document.title = `userid: ${fetch}`
  }, [fetch])
  return (
    <Main>
        <Container>
            <div className='dataFatchingSite'>
              <input 
                type='text' 
                placeholder = "Enter User_Id."
                value={user.id} 
                onChange={e => setId(e.target.value)}/>
              <button 
                className='FatchButton' 
                onClick={() => setFetch(id)} >FetchTitle</button>
            </div>
            <ul className='dataDisplaySite'><b><u>user_id:{fetch}</u></b>
              {user.map((x)=> x.title.length < 40 ? <li key={x.id}>{x.title}</li> : "")}
            </ul>
            
        </Container>
    </Main>
  )
}

export default App;


const Main = styled.div`
min-height: 100%;
min-width: 100%;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
text-align: center;
`

const Container = styled.div`
height: 95vh;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
background-color: green;
border: 5px black solid;


.dataFatchingSite{
  min-height: 50px;
  width: 100%;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input{
    height: 50%;
    background-color: transparent;
    border-radius: 10px;
    padding-left: 10px; 
    font-size: 16px;
    font-weight: 600;
    color: green;
    cursor: pointer;
    &:hover{
      border: 2px yellow solid;
      transform: scale(1.05);
    }
  }

  button{
    height: 65%;
    border-radius: 10px;
    background-color: green;
    font-weight: 500;
    color: black;
    letter-spacing: 1px;
    cursor: pointer;
    &:hover{
      border: 2px yellow solid;
      transform: scale(1.1);
    }
  }
}

.dataDisplaySite{
  height: 85%;
  width: 85%;
  list-style: none;
  border: 3px purple dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  padding: 10px 0px 0px 10px;
}
`