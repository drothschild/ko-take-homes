import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './App/components/Redux/store'

import App from './App'
import movieData from './movieData.json'
import './_global.css'

render(
  <Provider store={store}>
    <App movieData={movieData} />
  </Provider>,
  document.getElementById('app')
)
