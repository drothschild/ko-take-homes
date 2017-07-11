import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'

import App from './App'
import movieData from './movieData.json'
import './_global.css'

const omdbApiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=36ff4bcc` // Replace this with environmental variables
render(
  <Provider store={store}>
    <App apiUrl={omdbApiUrl} movieData={movieData} />
  </Provider>,
  document.getElementById('app')
)
