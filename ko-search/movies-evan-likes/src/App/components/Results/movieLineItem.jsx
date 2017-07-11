import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOMDBDetails } from 'actionCreators'
import styles from './styles.css'

class MovieLineItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getOMDBData()
  }

  render() {
    const { movie } = this.props
    let imdbID
    let rating
    if (this.props.imdbID) {
      imdbID = this.props.imdbID
      rating = this.props.rating
      console.log('Rating', rating)
    } else {
      imdbID = 'loading'
      rating = 'unrated'
    }
    return (
      <div className={styles.movieLineItem}>
        {movie.title}-{movie.year}-{imdbID}-{rating}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const omdbData = state.omdbData[ownProps.id] ? state.omdbData[ownProps.id] : {}
  return {
    imdbID: omdbData.imdbID,
    rating:
      omdbData.Ratings && omdbData.Ratings.filter(rating => rating.Source === 'Rotten Tomatoes')[0]
        ? omdbData.Ratings.filter(rating => rating.Source === 'Rotten Tomatoes')[0].Value
        : ' d'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOMDBData() {
    dispatch(getOMDBDetails(ownProps.movie.title, ownProps.movie.year, ownProps.id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieLineItem)
