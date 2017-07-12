import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './styles.css'
import MovieLineItem from './MovieLineItem'

const Results = ({ movieData, decadeFilter, searchFilter }) => {
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
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map(movie => {
      const key = encodeURIComponent(movie.title.toLowerCase() + movie.year)
      return <MovieLineItem movie={movie} key={key} id={key} />
    })
  return (
    <ol className={styles.results}>
      {movieList}
    </ol>
  )
}

Results.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.object).isRequired,
  decadeFilter: PropTypes.string,
  searchFilter: PropTypes.string
}

Results.defaultProps = {
  decadeFilter: 'all',
  searchFilter: ''
}

const mapStateToProps = state => ({
  decadeFilter: state.decadeFilter,
  searchFilter: state.searchFilter
})

export default connect(mapStateToProps)(Results)
