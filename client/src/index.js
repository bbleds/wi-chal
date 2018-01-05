
import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import * as api from './api/database'

const store = configureStore(api.getStorage())

// render application to page
render(
	<div>
		<Root store={store} />
	</div>,
	document.getElementById('app')
)
