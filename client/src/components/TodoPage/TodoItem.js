import React from 'react'

export default ({ data, checkable, onChangeHandler}) => (
  <li className={ data.completed ? 'completed-task' : '' }>
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
