import React from 'react'

const TodoItem = ({ data, checkable, onChangeHandler}) => {

  const currentClass = data.completed ? 'completed-task' : ''

  return(
    <li className={currentClass}>
      <label>
        {
        checkable &&
        <input
          type="checkbox"
          onChange={() => onChangeHandler(data.todoId) }
          defaultChecked={data.completed}
        />
        }
        <span>{data.text}</span>
        <span className='subtle-complete'>{ data.completed && ' - completed' }</span>
      </label>
    </li>
  )
}

export default TodoItem
