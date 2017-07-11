import React from 'react'
import Decades from './decades'
import Search from './search'
import styles from './styles.css'

const Filters = ({ movieData }) =>
  <div className={styles.filters}>
    <Decades movies={movieData}  />
    <Search />
  </div>

export default Filters
