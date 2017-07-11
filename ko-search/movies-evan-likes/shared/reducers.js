import { combineReducers } from 'redux'
import { SET_SEARCH_FILTER, SET_DECADE_FILTER, ADD_API_DATA } from './actions'

const searchFilter = (state = '', action) => {
  if (action.type === SET_SEARCH_FILTER) {
    return action.payload
  }
  return state
}

const decadeFilter = (state = '', action) => {
  if (action.type === SET_DECADE_FILTER) {
    return action.payload
  }
  return state
}

const omdbData = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.id]: action.payload })
  }
  return state
}

const rootReducer = combineReducers({ searchFilter, decadeFilter, omdbData })

export default rootReducer
