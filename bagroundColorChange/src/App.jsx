import { useState } from "react"
import styled from 'styled-components';

function App() {

  const [colorChoice, setColorChoice] = useState('')

  const color = ["red", "blue", "green", "none"]

  const colorChange = (x) => {
    if(x == "red"){
      setColorChoice('red')
    } else if( x == "blue"){
      setColorChoice("blue")
    }else if(x == 'green'){
      setColorChoice("green")
    }else{
      setColorChoice('none')
    };
  }

  return (
    <Main style={{background: colorChoice}}>
    <h1>Backround Color Changer</h1>
    <div className="button">
    {
        color.map((value)=>
          <button
          key={value}
          onClick = {()=>colorChange(value)}
           >{value}</button>
        )
      }
    </div>
     
    </Main>
  )
}

export default App;

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
min-height: 100vh;
min-width: 100vh;
margin: 0;
padding: 0;
align-items: center;
gap: 40px;

h1{
  padding-bottom: 100px;
  text-shadow: 10px black;
}

.button{
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 3px black solid;
  padding: 30px;
  border-radius: 10px;
}


button{
  height: 10vh;
  width: 20vh;
  cursor: pointer;
  border-radius: 10px;
  background-color: #DAC0A3;
  font-size: 20px;
  font-weight: 600;
  color: #61677A;
  &:hover{
    transform: scale(1.05);
    background-color: #F8F0E5;
  }
}
`