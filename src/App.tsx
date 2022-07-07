import React,{FC, useState} from 'react'
import CreateTodo from './Component/Header/CreateTodo';
import TodoList from './Component/Todos/TodoList';
import swal from 'sweetalert'
interface Form{
  task:string,
  time:number | string,
  id:number,
   
}

const  App:FC=()=> {

const [form, setForm] = useState<Form>({id:0,task:"", time:""});
const [todo, setTodo] = useState <Form []> ([])
 
const onChangeHandler =(event: React.ChangeEvent<HTMLInputElement>)=>{

  setForm({...form, [event.target.name]:event.target.value, id:todo.length+1})
}

const handleFormSubmit=(event: React.ChangeEvent<HTMLInputElement>)=>{
  event.preventDefault()  
 
  setTodo([...todo, form])
  swal("Task Added!", " ", "success");
 
}


  return (
   <>
   <CreateTodo form={form}  handleFormSubmit={handleFormSubmit}  onChangeHandler={onChangeHandler}/>
   <TodoList todo={todo} />
   </>
  )
}
export default App;