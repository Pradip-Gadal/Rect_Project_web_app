import React, { useState } from 'react'
import styled from 'styled-components'

const TodoField = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);


  const todoInput = (event) =>  setInputText(event.target.value);

  const todoItems = () => {
    if(inputText != ""){
     setTodoList([...todoList, inputText])
    }}

  const dltItems = (x) => {
    let itemInList = [...todoList]
    itemInList.splice(x.id, 1)
    setTodoList([...itemInList])
  }

  const handleEnterKey = (x) => {
    if(x.keyCode === 13){
      todoItems(inputText)
      setInputText("")
    };
  }
  
  return (
    <Section>
      <div className='appTitle'>ToDo App</div>
      <InputField className='todolistInputField'>
        <input 
          onChange={todoInput} 
          value={inputText}
          type='text' 
          placeholder='enter your task' 
          onKeyDown={handleEnterKey}
        />
        <button onClick={() => {
          setInputText(todoItems)
          setInputText("")}}>+</button>

      </InputField>
      <div className='todo-list-section'>
        <h1>ToDo List</h1>
        <button onClick={() => setTodoList([])}>clear all</button>
        <hr />
        <div className='todo-item-div'>
          {todoList.map((data, index) =>{
            return(
              <div className="todo-item" key={index}> 
                <p>{data}</p>
                <button 
                  onClick={() => dltItems(data)}
                  >delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
    
  )
}

export default TodoField;

const Section = styled.section`
height: 100vh;
min-width: 80vh;
background-color: #CBE4DE;

.appTitle{
  height: 12%;
  background-color: #2E4F4F;
  color: #CBE4DE;
  font-weight: 800;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-list-section{
  display: flex;
  flex-direction: column;
  align-items: center;
} 
  h1{
    text-align: center;
    text-decoration: underline;
    color: #2C3333;
  }
  button{
    max-width: 20%;

  }
.todo-item{
  display: flex;
  width: 70vh;
  max-height: 50px;
  background-color: #0E8388;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  border-radius: 10px;
  font-size: 24px;
  color: #CBE4DE;
}

.todo-item-div{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  
}

button{
  border-radius: 10px;
  background-color: transparent;
  color: red;
  border: 2px red solid;
  min-height: 30px;
  min-width: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
}

p{
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
}
`

const InputField = styled.div`
background-color: #0E8388;
display: flex;
justify-content: center;
gap: 10px;
align-items: center;
height: 15%;

input{
  box-sizing: border-box;
  height: 40px;
  width: 50%;
  border: 5px #2E4F4F solid;
  border-radius: 10px;
  background-color: #CBE4DE;
  font-size: 20px;
  padding-left: 10px;
  color: #2C3333 !important;
  &:hover{
    transform: scale(1.02);
  }
}

button{
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  border-radius: 30%;
  border: 5px #2E4F4F solid;
  font-size: 20px;
  font-weight: 800;
  background-color: #CBE4DE;
  color: #2C3333;
  &:hover{
    transform: scale(1.1);
  }
}
`