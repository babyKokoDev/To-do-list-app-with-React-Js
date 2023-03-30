import React, { useState } from 'react';


export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = (event) => {
         event.preventDefault()
         editTodo(value, task.id)

         setValue('')
    }
  return (
     <form action="" className="TodoForm" onSubmit={handleSubmit}>
         <input type="text" value={value} maxLength={25} className='todo-input' placeholder='Update Task' onChange={(event)=>setValue(event.target.value)} />
         <button type='submit' className='todo-btn'>Update</button>
     </form>
  )
}

export default EditTodoForm