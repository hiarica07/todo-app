import React, { useState } from 'react'
import Data from "../helper/Data"
import TodoEkle from '../components/TodoEkle'
import TodoGoster from '../components/TodoGoster'



const Home = () => {

  const [todos, setTodos] = useState(Data);
  
  return (
    <div>
    <TodoEkle todos={todos} setTodos={setTodos} /> 
    <TodoGoster todos={todos} setTodos={setTodos}/>
    </div>
    
    
  )
}

export default Home