import React, { useState } from 'react';


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = (event) => {
         event.preventDefault()
         addTodo(value)

         setValue('')
    }
  return (
     <form action="" className="TodoForm" onSubmit={handleSubmit}>
         <input type="text" value={value} maxLength={25} className='todo-input' placeholder='What is the task today' onChange={(event)=>setValue(event.target.value)} />
         <button type='submit' className='todo-btn'>Add Task</button>
     </form>
  )
}

export default TodoForm