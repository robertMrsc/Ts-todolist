import React, { useState } from 'react';
import { todoType } from './TodoType';
import {AiFillEdit, AiTwotoneDollar} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiOutlineCheck} from 'react-icons/ai';
interface Props{
  todo:todoType,
  setTodos:React.Dispatch<React.SetStateAction<todoType[]>>,
  todos:todoType[],
  setCompletedTodos:React.Dispatch<React.SetStateAction<todoType[]>>,
  completedTodos:todoType[],
}
const PendingTodo:React.FC<Props> = ({todo, setTodos,todos, setCompletedTodos, completedTodos}) => {
  const [editText, setEditText]=useState<string>('');
  const removeTodo=todos.filter((obj)=>{
      return obj.id!==todo.id
    })
  const handleRemove=()=>{
    setTodos(removeTodo)
  }
  const handleDone=()=>{
    todo.isDone=true;
    setCompletedTodos([...completedTodos, todo])
    setTodos(removeTodo);
    
  }
  const handleEdit=()=>{
    todo.isEdit=true;
    setTodos([...todos])

  }
  const handleEditChange=(e:React.FormEvent<HTMLInputElement>) :void => {
    setEditText(e.currentTarget.value)
  }

  const handleSubmit=(e:React.FormEvent) : void =>{
    e.preventDefault();
    if (editText){
      todo.todo=editText;
      todo.isEdit=false;
      setTodos([...todos])
    }
  }

  // finish edit input and hide buttons when edit true. only button to show is submit edit.

  return (
    <div className='todo-div' >
      {  !todo.isEdit && <p  className='todo-div-text'>{todo.todo}</p>}
      {todo.isEdit && <form onSubmit={handleSubmit} className='edit-form'>
        <input type='text' className='edit-input' value={editText} onChange={handleEditChange} spellCheck={false} placeholder='Enter a new value...' ></input>
        <button className='edit-button' type='submit'>Save</button>
        </form>}
      {  !todo.isEdit && <div className='todo-icons'>
          <span onClick={handleEdit} className='todo-icon'><AiFillEdit/></span>
          <span onClick={handleRemove} className='todo-icon'><BsFillTrashFill/></span>
          <span className='todo-icon'><AiOutlineCheck onClick={handleDone} /></span>
      </div> }
      
    </div>
  )
}

export default PendingTodo 