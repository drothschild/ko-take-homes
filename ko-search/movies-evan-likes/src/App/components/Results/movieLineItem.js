import React, { Component } from 'react'
import styles from './styles.css'

class MovieLineItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      loaded: false
    }
  }
  props = {
    movie: Movie,
    omdbData: object
  }

  render() {
    return <div className={styles.movieLineItem} />
  }
}

export default MovieLineItem
