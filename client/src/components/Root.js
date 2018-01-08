import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import TodoContainer from './TodoPage/TodoContainer'

export default class Root extends Component{
  render(){
    return(
      <div>
        <Provider store={this.props.store} >
          <TodoContainer />
        </Provider>
      </div>
    )
  }
}
