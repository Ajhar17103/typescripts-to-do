import React,{FC, useState} from 'react'
import CreateTodo from './Component/Header/CreateTodo';
import TodoList from './Component/Todos/TodoList';

const  App:FC=()=> {

const [form, setForm] = useState([{task:"", time:""  }]);

const handleFormSubmit=(event: ChangeEvent<HTMLInputElement>):void=>{
    
} 
  return (
   <>
   <CreateTodo formSubmit={handleFormSubmit} />
   <TodoList />
   </>
  )
}
export default App;