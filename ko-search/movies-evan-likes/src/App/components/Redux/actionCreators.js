import axios from 'axios'
import { SET_SEARCH_FILTER, ADD_OMDB_DATA, SET_DECADE_FILTER, EXPAND_LINE } from './actions'

export function setSearchFilter(searchFilter) {
  return { type: SET_SEARCH_FILTER, payload: searchFilter }
}

export function setDecadeFilter(decadeFilter) {
  return { type: SET_DECADE_FILTER, payload: decadeFilter }
}

function addOMDBData(omdbData) {
  return { type: ADD_OMDB_DATA, payload: omdbData }
}

export function expandLine(expanded) {
  return { type: EXPAND_LINE, payload: expanded }
}

export function getOMDBDetails(title, year, id) {
  const dataWithID = {}
  if (localStorage.getItem([`${id}-imdb`]) && localStorage.getItem([`${id}-rating`])) {
    dataWithID.id = id
    dataWithID.imdbID = localStorage[`${id}-imdb`]
    dataWithID.rating = localStorage[`${id}-rating`]
    return addOMDBData(dataWithID)
  }
  return dispatch => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=36ff4bcc&t=
        ${encodeURIComponent(title)}&y=${year}&type=movie`
      )
      .then(response => {
        if (response.data.Ratings.filter(rating => rating.Source === 'Rotten Tomatoes')[0]) {
          dataWithID.rating = response.data.Ratings.filter(
            rating => rating.Source === 'Rotten Tomatoes'
          )[0].Value
        } else {
          dataWithID.rating = 'Unrated'
        }
        dataWithID.id = id
        dataWithID.imdbID = response.data.imdbID
        localStorage[`${id}-rating`] = dataWithID.rating
        localStorage[`${id}-imdb`] = response.data.imdbID
        dispatch(addOMDBData(dataWithID))
      })
      .catch(error => {
        console.error('axios error', error)
      })
  }
}
