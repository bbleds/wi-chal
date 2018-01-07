import React from 'react'

const TodoFooter = ({onClickHandler}) => {
  return(
    <div>
      <a href="#" onClick={ () => { onClickHandler('all') }}>all</a>
      {' | '}
      <a href="#" onClick={ () => { onClickHandler('completed') }} >completed</a>
      {' | '}
      <a href="#" onClick={ () => { onClickHandler('to-do') }} >to-do</a>
    </div>
  )
}

export default TodoFooter
