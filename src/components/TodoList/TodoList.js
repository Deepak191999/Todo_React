import React from 'react'
import TodoItem from '../TodoItem/TodoItem';



const TodoList= ({todos,incPriority,decPriority,deleteTask})=>{
  return(
    todos.map((todo)=> <TodoItem todo={todo} incPriority={incPriority} decPriority={decPriority} deleteTask={deleteTask} />)
  )
}

export default TodoList