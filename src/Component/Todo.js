import React from 'react'

const Todo = ({task, toggleComplete, deleteTodo} ) => {
  return (
    <div className="Todo">
        <div onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</div>
        <div>
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-sharp fa-solid fa-trash" onClick={()=>deleteTodo(task.id)}></i>
        </div>
    </div>
  )
}

export default Todo