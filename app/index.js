/* global localStorage */
import React from 'react'
import { render as renderReact } from 'react-dom'
import { compose, createStore } from 'redux'
import { devTools } from 'redux-devtools'
import debounce from 'debounce'
import reducer from './reducers'

const isDevelopment = process.env.NODE_ENV === 'development'

const state = JSON.parse(localStorage.getItem('state'))
const appCreateStore = isDevelopment ? compose(devTools())(createStore) : createStore
const store = appCreateStore(reducer, state || {})

let App = require('./components/App').default
const render = (Component) => {
  renderReact(<Component {...store} />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./components/App', function () {
    let newApp = require('./components/App').default
    render(newApp)
  })
}

const saveState = debounce(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
}, 1000)
store.subscribe(() => {
  saveState()
  render(App)
  if (process.env.ENV === 'development') {
    console.log('state', store.getState())
  }
})
store.dispatch({ type: 'APP_INIT', store })
