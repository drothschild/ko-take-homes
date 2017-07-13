import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setDecadeFilter } from '../Redux/actionCreators'

import styles from './styles.css'

const decadesFromMovies = movieData => {
  const decades = []
  let decadeValues = []
  const defaultValue = (
    <option value="all" key="all">
      All Decades
    </option>
  )
  const years = movieData.map(movie => movie.year)
  years.forEach(year => {
    const decade = Math.floor(year / 10) * 10
    if (decades.indexOf(decade) === -1) {
      decades.push(decade)
    }
  })
  decadeValues = decades.sort().map(decade =>
    /* eslint-disable react/jsx-wrap-multilines */
    <option value={decade} key={decade}>
      {decade}s
    </option>
  )
  decadeValues.unshift(defaultValue)
  return decadeValues
}

const Decades = ({ decadeFilter, handleDecadeChange, movieData }) =>
  /* eslint-disable react/jsx-wrap-multilines */
  <select className={styles.decades} value={decadeFilter} onChange={handleDecadeChange}>
    {decadesFromMovies(movieData)}
  </select>

Decades.propTypes = {
  decadeFilter: PropTypes.string,
  handleDecadeChange: PropTypes.func,
  movieData: PropTypes.arrayOf(PropTypes.object).isRequired
}
Decades.defaultProps = {
  decadeFilter: 'all',
  handleDecadeChange: () => ''
}

const mapStateToProps = state => ({ decadeFilter: state.decadeFilter })
const mapDispatchToProps = dispatch => ({
  handleDecadeChange(event) {
    dispatch(setDecadeFilter(event.target.value))
  }
})

export const Unwrapped = Decades
export default connect(mapStateToProps, mapDispatchToProps)(Decades)
