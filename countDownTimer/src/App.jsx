import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [timer, setTimer] = useState(0)
  const [state, setState] = useState(false);

  useEffect(() => {
    let interval = null;
    if(state) {
      interval = setInterval(()=> {
      setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [state]);

  const format = (timer) => {
    let sec =`${0}${Math.floor(timer % 60)}`.slice(-2)
    let min = String(Math.floor(timer/600 % 60)).padStart(2, "0");
    let hrs = Math.floor(timer/3600 % 24).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });


    return `${hrs}:${min}:${sec}`
  }

  return (
    <Container>
        <Main>
          <h1>CountDown Timer</h1>
          <h2>{format(timer)}</h2>
      
          <div className='startPauseBtn'>
          {(!state && timer == 0) && (<button className='startBtn' onClick={() => setState(true)}>START</button>)}
          {state && (<button className='pauseBtn' onClick={() => setState(false)}>PAUSE</button>)
          }
          {!state && timer > 0 &&
          <div className='resumeResetBtn'>
            <button className='resumeBtn' onClick={() => setState(true)}>RESUME</button>
            <button className='resetBtn' onClick={() => setTimer(0)}>RESET</button>
          </div> }      
          </div>
       </Main>
    </Container>
    
  )
}

export default App;

const Container = styled.main`
display: flex;
justify-content: center;
align-items: center;
min-width: 100vh;
min-height: 100vh;
`
const Main = styled.div`
min-height: 40vh;
width: 60vh;
background-color: #F7F1E5;
text-align: center;
border: 10px #4C4B16 solid;
display: flex;
flex-direction: column;
align-items: center;

h1{
  color: #F7F1E5;
  font-weight: 600;
  max-width: 80%;
  border: 5px #4C4B16 solid;
  border-radius: 25px;
  padding:0px 50px;
  background-color: #898121;
}

h2{
  color: #4C4B16;
  font-size: 32px;
}

button{
  height: 40px;
  min-width: 100px;
  font-size: 18px;
  font-weight: 500;
  border: 3px #4C4B16 solid;
  border-radius: 10px;
  color: #F7F1E5;

  &:hover{
    transform: scale(1.05);
  }
}

.startBtn{
  background-color: #898121;

  &:hover{
    background-color: #A2A378;
  }
}
.pauseBtn{
  background-color: #E7B10A;
  &:hover{
    background-color: #FFC95F;
  }
}

.resumeResetBtn{
  display: flex;
  gap: 10px;
}

.resumeBtn{
  background-color: #E7B10A;
  &:hover{
    background-color: #FFC95F;
  }
}

.resetBtn{
  background-color: #898121;

  &:hover{
    background-color: #A2A378;
  }
}
`