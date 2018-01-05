import React from 'react'
import {render} from 'react-dom'
import domready from 'domready'
import Root from './components/Root'
import configureStore from './store/configureStore'
import * as api from './api/database'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

const store = configureStore(api.getStorage())

// render application to page
domready(() => {
	render(
		<div>
			<Root store={store} />
		</div>,
		document.getElementById('app')
	)}
);
