
import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import { getState } from './api/database'

const store = configureStore(getState())
console.log('getting state from local store', getState());

// render application to page
render(
	<div>
		<Root store={store} />
	</div>,
	document.getElementById('app')
)
