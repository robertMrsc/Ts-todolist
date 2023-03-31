import React from 'react';
import { useState } from 'react';
import { todoType } from './TodoType';
import PendingTodo from './PendingTodo';
import DoneTodo from './DoneTodo';


interface Props{
    todos:todoType[],
    setTodos:React.Dispatch<React.SetStateAction<todoType[]>>,
    completedTodos:todoType[],
    setCompletedTodos:React.Dispatch<React.SetStateAction<todoType[]>>
}
const Todo:React.FC<Props> = ({setTodos, todos, completedTodos, setCompletedTodos}) => {
    const [todoText, setTodoText]=useState<string>('');
    const handleText=(e:React.FormEvent<HTMLInputElement>) : void =>{
        setTodoText(e.currentTarget.value)
    }
    const handleSubmit=(e:React.FormEvent) : void =>{
        e.preventDefault();
        if(todoText){
        setTodos([...todos, {
            id:Date.now(),
            todo:todoText,
            isDone:false,
            isEdit:false
        }])
        setTodoText('')
    }
    }
  return (
    <div className='todo'>
        <form className='input-form' onSubmit={handleSubmit} >
            <input className='todo-input' spellCheck={false} type='text' placeholder='Add a new task...' value={todoText} onChange={handleText} ></input>
            <button className='add-button' type='submit'>Add</button>
        </form>
        <div className='todo-lists'>
        <div className='todo-pending'>
            
            <div className='todo-pending-content'>
                <p className='todo-title'>Todo List</p>
                <>
                {todos.map((todo)=>{
                   return !todo.isDone ? <PendingTodo completedTodos={completedTodos} key={todo.id} setCompletedTodos={setCompletedTodos} todos={todos} setTodos={setTodos} todo={todo} /> : null
                })}
                </>
            </div>
            
        </div>

        <div className='todo-completed'>
            <div className='todo-completed-content'>
                <p className='todo-title'>Completed todo</p>
                <>
                    {completedTodos.map((todo)=>{
                        return todo.isDone ?  <DoneTodo setCompletedTodos={setCompletedTodos} completedTodos={completedTodos} todo={todo} key={todo.id} /> : null
                    })}
                </>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Todo