import React from 'react';
import './App.scss';
import Header from './Header';
import Todo from './Todo';
import { useState } from 'react';
import {todoType} from './TodoType'

const App:React.FC=() => {
  const [todos, setTodos]=useState<todoType[]>([]);;
  const [completedTodos, setCompletedTodos]=useState<todoType[]>([]);
  return (
    <div className="App">
      <Header/>
      <Todo todos={todos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
