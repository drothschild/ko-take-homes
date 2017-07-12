import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOMDBDetails, expandLine } from '../Redux/actionCreators'
import styles from './styles.css'

class MovieLineItem extends Component {
  componentDidMount() {
    this.props.getOMDBData()
  }

  render() {
    const { movie } = this.props
    let rating
    let title
    let evanSays
    let expandFunction
    if (this.props.imdbID) {
      title = (
        <a
          href={`https://www.imdb.com/title/${this.props.imdbID}`}
          onClick={event => event.stopPropagation()}
        >
          {movie.title}
        </a>
      )
      rating = this.props.rating
    } else {
      title = movie.title
      rating = 'Unrated'
    }

    if (this.props.lineExpandedID === this.props.id) {
      evanSays = (
        <div>
          {movie.evanSays}
        </div>
      )
      expandFunction = this.props.contractLine
    } else {
      evanSays = null
      expandFunction = this.props.expandLine
    }

    return (
      <li className={styles.movieLineItem} onClick={expandFunction}>
        {title} ({movie.year}) {rating}
        {evanSays}
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const omdbData = state.omdbData[ownProps.id] ? state.omdbData[ownProps.id] : {}
  return {
    imdbID: omdbData.imdbID,
    rating: omdbData.rating,
    lineExpandedID: state.lineExpandedID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOMDBData() {
    dispatch(getOMDBDetails(ownProps.movie.title, ownProps.movie.year, ownProps.id))
  },
  expandLine() {
    dispatch(expandLine(ownProps.id))
  },
  contractLine() {
    dispatch(expandLine(''))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieLineItem)
