import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSearchFilter } from '../Redux/actionCreators'

import styles from './styles.css'

const Search = ({ searchFilter, handleSearchTermChange }) =>
  /* eslint-disable react/jsx-wrap-multilines */
  <input
    type="text"
    placeholder="Search"
    value={searchFilter}
    onChange={handleSearchTermChange}
    className={styles.search}
  />

Search.propTypes = {
  searchFilter: PropTypes.string,
  handleSearchTermChange: PropTypes.func
}

Search.defaultProps = {
  searchFilter: '',
  handleSearchTermChange: () => ''
}

const mapStateToProps = state => ({ searchFilter: state.searchFilter })
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchFilter(event.target.value))
  }
})

export const Unwrapped = Search
export default connect(mapStateToProps, mapDispatchToProps)(Search)
