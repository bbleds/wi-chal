import React from 'react'

export default ({setTodosVisibilty}) => (
  <div>
    <a href="#" onClick={ () => setTodosVisibilty('all') } >all</a>
    {' | '}
    <a href="#" onClick={ () => setTodosVisibilty('completed') } >completed</a>
    {' | '}
    <a href="#" onClick={ () => setTodosVisibilty('to-do') } >to-do</a>
  </div>
)
