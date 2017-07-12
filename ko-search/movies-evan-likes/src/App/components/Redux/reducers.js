import { combineReducers } from 'redux'
import { SET_SEARCH_FILTER, SET_DECADE_FILTER, ADD_OMDB_DATA, EXPAND_LINE } from './actions'

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
  if (action.type === ADD_OMDB_DATA) {
    return Object.assign({}, state, { [action.payload.id]: action.payload })
  }
  return state
}

const lineExpandedID = (state = '', action) => {
  if (action.type === EXPAND_LINE) {
    return action.payload
  }
  return state
}
const rootReducer = combineReducers({ searchFilter, decadeFilter, omdbData, lineExpandedID })

export default rootReducer
