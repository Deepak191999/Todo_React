import React, { useRef } from "react";
import headerCss from "./TodoHeader.module.css";



const TodoHeader = ({ addTask }) => {
  const inputRef = useRef("");

  function btnHandler() {
    console.log("Button Clicked");
    let taskValue = inputRef.current.value;
    addTask(taskValue);
    inputRef.current.value = "";
    console.log(taskValue);
  }

  return (
    <div className={headerCss.headerContainer}>
      <input
        type="text"
        placeholder="Enter Task Name"
        ref={inputRef}
        className={headerCss.inputField}
      />
      <button onClick={btnHandler} className={headerCss.addButton}>
        Add Task
      </button>
    </div>
  );
};

export default TodoHeader;
