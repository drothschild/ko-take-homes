import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.css'
import MovieLineItem from './movieLineItem'

const Results = ({ apiUrl, movieData, decadeFilter, searchFilter }) => {
  const movieList = movieData
    .filter(movie => {
      const decade = parseInt(decadeFilter, 10)
      return (
        (decadeFilter === 'all' ||
          decadeFilter === '' ||
          (movie.year <= decade + 9 && movie.year >= decade)) &&
        (searchFilter.length < 2 ||
          movie.title.toUpperCase().indexOf(searchFilter.toUpperCase()) >= 0)
      )
    })
    .sort((a, b) => a.title - b.title)
    .map(movie => {
      const key = encodeURIComponent(movie.title + movie.year)
      return (
        <li key={key}>
          <MovieLineItem movie={movie} id={key} apiUrl={apiUrl} />
        </li>
      )
    })
  return (
    <ul className={styles.results}>
      {movieList}
    </ul>
  )
}

const mapStateToProps = state => ({
  decadeFilter: state.decadeFilter,
  searchFilter: state.searchFilter
})

export default connect(mapStateToProps)(Results)
