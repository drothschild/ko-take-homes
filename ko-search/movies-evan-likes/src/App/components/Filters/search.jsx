import React from 'react'
import { connect } from 'react-redux'
import { setSearchFilter } from '../Redux/actionCreators'

import styles from './styles.css'

const Search = ({ searchFilter, handleSearchTermChange }) =>
  <input
    type="text"
    placeholder="Search"
    value={searchFilter}
    onChange={handleSearchTermChange}
    className={styles.search}
  />

const mapStateToProps = state => ({ searchFilter: state.searchFilter })
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchFilter(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
