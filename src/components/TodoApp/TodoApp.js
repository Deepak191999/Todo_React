import React, { useState } from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoList from '../TodoList/TodoList'
let initialTodos= ['Football','Hockey','Cricket','Dance']





const TodoApp= ()=>{
  const [todos,setTodos]=useState(initialTodos);

  function addTask(newTask){
    let newTodos= [...todos,newTask]
    setTodos(newTodos)
  }

  function deleteTask(task){
    let newTodos = todos.filter((t)=> t!=task)
    setTodos(newTodos)
  }

  function incPriority(task){
    let newTodos=[...todos]
    let indx= newTodos.indexOf(task);
    if(indx<=0)return;
    let temp= newTodos[indx];
    newTodos[indx]=newTodos[indx-1];
    newTodos[indx-1]=temp;
    setTodos(newTodos)
  }

  function decPriority(task){
    let newTodos=[...todos]
    let indx= newTodos.indexOf(task);
    if(indx >= newTodos.length-1) return;
    let temp= newTodos[indx]
    newTodos[indx]=newTodos[indx+1];
    newTodos[indx+1]=temp;

    setTodos(newTodos)

  }

  return(
    <>
    <h1>Todo app</h1>
    <TodoHeader addTask={addTask}/>
    <TodoList todos={todos} incPriority={incPriority} decPriority={decPriority} deleteTask={deleteTask} />
    </>
  )
}

export default TodoApp;