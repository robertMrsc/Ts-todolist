import React from 'react';
import { todoType } from './TodoType';
import {BsFillTrashFill} from 'react-icons/bs';
interface Props{
  completedTodos:todoType[],
    setCompletedTodos:React.Dispatch<React.SetStateAction<todoType[]>>,
    todo:todoType
}

const DoneTodo:React.FC<Props> = ({completedTodos, setCompletedTodos,todo}) => {
  const removeTodo=completedTodos.filter((obj)=>{
    return obj.id!==todo.id
  })
  const handleRemove=()=>{
    setCompletedTodos(removeTodo)
  }
  return (
    <div className='todo-div'>
        <p  className='todo-div-text'>{todo.todo}</p>
      <div className='todo-icons'>
          <span onClick={handleRemove} className='todo-icon'><BsFillTrashFill/></span>
      </div>
    </div>
  )
}

export default DoneTodo