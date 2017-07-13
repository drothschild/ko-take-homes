import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getOMDBDetails, expandLine } from '../Redux/actionCreators'

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
    if (this.props.imdbID !== '') {
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
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
      <li onClick={expandFunction}>
        {title} ({movie.year}) {rating}
        {evanSays}
      </li>
    )
  }
}

MovieLineItem.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
  imdbID: PropTypes.string,
  rating: PropTypes.string,
  lineExpandedID: PropTypes.string,
  id: PropTypes.string.isRequired,
  getOMDBData: PropTypes.func,
  contractLine: PropTypes.func,
  expandLine: PropTypes.func
}

MovieLineItem.defaultProps = {
  imdbID: '',
  rating: 'Unrated',
  lineExpandedID: '',
  getOMDBData: () => {},
  contractLine: () => '',
  expandLine: () => {}
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

export const Unwrapped = MovieLineItem
export default connect(mapStateToProps, mapDispatchToProps)(MovieLineItem)
