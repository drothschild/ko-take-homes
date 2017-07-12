import React from 'react'
import { connect } from 'react-redux'
import { setDecadeFilter } from '../Redux/actionCreators'

import styles from './styles.css'

const decadesFromMovies = movies => {
  const decades = []
  let decadeValues = []
  const defaultValue = (
    <option value="all" key="all">
      All Decades
    </option>
  )
  const years = movies.map(movie => movie.year)
  years.forEach(year => {
    const decade = Math.floor(year / 10) * 10
    if (decades.indexOf(decade) === -1) {
      decades.push(decade)
    }
  })
  decadeValues = decades.sort().map(decade =>
    <option value={decade} key={decade}>
      {decade}'s
    </option>
  )
  decadeValues.unshift(defaultValue)
  return decadeValues
}

const Decades = ({ decadeFilter, handleDecadeChange, movies }) =>
  <select className={styles.decades} value={decadeFilter} onChange={handleDecadeChange}>
    {decadesFromMovies(movies)}
  </select>

Decades.defaultProps = {
  decadeFilter: 'all'
}

const mapStateToProps = state => ({ decadeFilter: state.decadeFilter })
const mapDispatchToProps = dispatch => ({
  handleDecadeChange(event) {
    dispatch(setDecadeFilter(event.target.value))
  }
})

export const Unwrapped = Decades
export default connect(mapStateToProps, mapDispatchToProps)(Decades)
