import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import * as api from './api/database'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

const store = configureStore(api.getStorage())

// render application to page
window.addEventListener('load', () => {
  render(
    <div>
      <Root store={store} />
    </div>,
    document.getElementById('app')
  )}
);
