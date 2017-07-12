import React from 'react'
import Decades from './Decades'
import Search from './Search'
import styles from './styles.css'

const Filters = ({ movieData }) =>
  <div className={styles.filters}>
    <Search />
    <Decades movies={movieData} />
  </div>

export default Filters
