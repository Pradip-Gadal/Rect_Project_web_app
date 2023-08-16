import { useState } from 'react';
import App from './App';
import styled from 'styled-components';

const UnmountBtn = () => {
    const [display, setDisplay] = useState(true)
  return (
    <Main>
      <Container>
      <h1 className='heading'>Pointer Coodinates</h1>
      <div className='condition'>
      {display ? <App /> : <h1>Show The Position</h1>}
      </div>

      <Button className="button" onClick={() => setDisplay(!display)}>{display?"OFF":"ON"}</Button>
    </Container>
    </Main>

  )
}

export default UnmountBtn;

const Main = styled.div`
display: flex;
justify-content: center;
`


const Container = styled.div`
min-height: 80vh;
min-width: 60vh;
background-color: aquamarine;
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;

.heading{
  background-color: purple;
  color: aquamarine;
  margin: 0px;
  height: 10%;
  width: 100%;
  text-align: center;
  padding-top: 15px;
}

.condition{
  box-sizing: border-box;
  min-height: 40%;
  width: 80%;
  color: purple;
  border: 15px purple solid;
  text-align: center;
  padding: 20px;
}
`
const Button = styled.button`
height: 15%;
width: 50%;
font-size: 32px;
font-weight: 800;
color: aquamarine;
background-color: purple;
cursor: pointer;
&:hover{
  transform: scale(1.02);
  background-color: #5C4B99;
}
`

