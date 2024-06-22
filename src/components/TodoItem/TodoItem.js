import React from 'react'
import todoCss from './TodoItem.module.css';




const TodoItem =({incPriority,decPriority,deleteTask,todo})=>{

  function upBtn(ev){
    incPriority(ev.target.parentElement.previousElementSibling.innerText);
  } 
  function downBtn(ev){
    decPriority(ev.target.parentElement.previousElementSibling.innerText);
  } 
  function deleteBtn(ev){
    console.log("deleteTodo called");
    deleteTask(ev.target.parentElement.previousElementSibling.innerText);
  }
  return (
    <div className={todoCss.todoItem}>
    <span >{todo}</span>
    <span className={todoCss.btnGroup}>
      <button onClick={upBtn} className={todoCss.button}>⬆️</button>
      <button onClick={downBtn} className={todoCss.button}>⬇️</button>
      <button onClick={deleteBtn} className={todoCss.button}>❌</button>
    </span>
  </div>
  )
}

export default TodoItem;