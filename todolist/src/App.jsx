import TodoField from "./component/TodoField"
import styled from "styled-components"


function App() {


  return (
    <Body>
     <TodoField />
    </Body>
  )
}

export default App


const Body = styled.div`
height: 100%;
min-width: 100%;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
`