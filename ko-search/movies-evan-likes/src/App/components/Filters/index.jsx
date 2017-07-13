import React from 'react'
import PropTypes from 'prop-types'
import Decades from './Decades'
import Search from './Search'

import styles from './styles.css'

const Filters = ({ movieData }) =>
  /* eslint-disable react/jsx-wrap-multilines */
  <div className={styles.filters}>
    <Search />
    <Decades movieData={movieData} />
  </div>

Filters.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Filters
