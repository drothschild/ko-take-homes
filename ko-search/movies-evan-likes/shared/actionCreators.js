import axios from 'axios'
import { SET_SEARCH_FILTER, ADD_API_DATA, SET_DECADE_FILTER } from './actions'

export function setSearchFilter(searchFilter) {
  return { type: SET_SEARCH_FILTER, payload: searchFilter }
}

export function setDecadeFilter(decadeFilter) {
  return { type: SET_DECADE_FILTER, payload: decadeFilter }
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData }
}

export function getOMDBDetails(title, year, id) {
  let dataWithID
  return dispatch => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=36ff4bcc&t=${encodeURIComponent(
          title
        )}&y=${year}&type=movie`
      )
      .then(response => {
        console.log(response.data)
        dataWithID = Object.assign({}, response.data)
        dataWithID.id = id
        dispatch(addAPIData(dataWithID))
      })
      .catch(error => {
        console.error('axios error', error)
      })
  }
}
