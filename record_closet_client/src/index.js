import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-thunk'
import thunk from 'react-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './components/App'
import {rootReducer} from './reducers/rootReducer'

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )