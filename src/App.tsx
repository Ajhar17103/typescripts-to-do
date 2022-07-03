import React,{FC, useState} from 'react'
import CreateTodo from './Component/Header/CreateTodo';
import TodoList from './Component/Todos/TodoList';

interface Form{
  task:string,
  time:number | string
}

const  App:FC=()=> {

const [form, setForm] = useState([{task:"", time:""}]);

const onChangeHandler =(event: React.ChangeEvent<HTMLInputElement>)=>{
  
  setForm({...form, [event.target.name]:event.target.value})
}

const handleFormSubmit=(event: React.ChangeEvent<HTMLInputElement>)=>{
  event.preventDefault()  
  console.log(form)
 
  
} 
  return (
   <>
   <CreateTodo handleFormSubmit={handleFormSubmit}  onChangeHandler={onChangeHandler}/>
   <TodoList />
   </>
  )
}
export default App;