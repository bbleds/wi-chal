
import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import * as api from './api/database'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

let initialState = api.getStorage()
const store = configureStore(initialState)

// render application to page
render(
	<div>
		<Root store={store} />
	</div>,
	document.getElementById('app')
)
