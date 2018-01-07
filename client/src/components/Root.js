import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import TodoContainer from './TodoPage/TodoContainer'

export default class Root extends Component{
  render(){
    const { store }  = this.props

    return(
      <div>
        <Provider store={store} >
        <TodoContainer />
        </Provider>
      </div>
    )
  }
}
