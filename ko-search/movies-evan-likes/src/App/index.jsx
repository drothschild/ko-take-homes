import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import { Filters, Results } from './components'

const App = ({ movieData }) =>
  /* eslint-disable react/jsx-wrap-multilines */
  <div className={styles.page}>
    <div className={styles.appDescription}>
      <h1 className={styles.title}>Movies Evan Likes!</h1>
      <p className={styles.content}>
        Below is a (not) comprehensive list of movies that Evan really likes.
      </p>
    </div>
    <Filters movieData={movieData} />
    <Results movieData={movieData} />
  </div>

App.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default App
