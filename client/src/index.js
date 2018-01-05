import React from 'react'
import {render} from 'react-dom'
import domready from 'domready'
import Root from './components/Root'
import configureStore from './store/configureStore'
import * as api from './api/database'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

let initialState = api.getStorage()
const store = configureStore(initialState)

// render application to page once dom loaded
domready(() => {
	render(
		<div>
			<Root store={store} />
		</div>,
		document.getElementById('app')
	)}
);
