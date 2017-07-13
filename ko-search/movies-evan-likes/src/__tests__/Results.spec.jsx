import React from 'react'
import { Provider } from 'react-redux'
import { shallow, render } from 'enzyme'
import Results, { Unwrapped as UnwrappedResults } from '../App/components/Results/index'
import store from '../App/components/Redux/store'
import { setSearchFilter, setDecadeFilter } from '../App/components/Redux/actionCreators'
import movieData from '../movieData.json'
import MovieLineItem from '../App/components/Results/MovieLineItem'

test('Results renders correctly', () => {
  const component = shallow(<UnwrappedResults movieData={movieData} />)
  expect(component).toMatchSnapshot()
})

test('Results should without search items render all the movies', () => {
  const component = shallow(<UnwrappedResults movieData={movieData} />)
  expect(movieData.length).toEqual(component.find(MovieLineItem).length)
})

test('Results should render correct number of movies based on Decade Filter', () => {
  const decade = '1960'
  store.dispatch(setDecadeFilter(decade))
  const component = render(
    <Provider store={store}>
      <Results movieData={movieData} />
    </Provider>
  )
  const movieCount = 1
  expect(component.find('li').length).toEqual(movieCount)
})

test('Search filter shorter than 2 characters should be ignored', () => {
  const term = 'g'
  store.dispatch(setDecadeFilter('all'))
  store.dispatch(setSearchFilter(term))
  const component = render(
    <Provider store={store}>
      <Results movieData={movieData} />
    </Provider>
  )
  expect(component.find('li').length).toEqual(movieData.length)
})

test('Results should render correct number of movies based on Search Filter', () => {
  const term = 'girl'
  store.dispatch(setSearchFilter(term))
  const component = render(
    <Provider store={store}>
      <Results movieData={movieData} />
    </Provider>
  )
  const movieCount = 1
  expect(component.find('li').length).toEqual(movieCount)
})

test('Results should render correct number of movies based on Search Filter and Decade Filter', () => {
  const term = 'the'
  const decade = '1990'
  store.dispatch(setSearchFilter(term))
  store.dispatch(setDecadeFilter(decade))
  const component = render(
    <Provider store={store}>
      <Results movieData={movieData} />
    </Provider>
  )
  const movieCount = 1
  expect(component.find('li').length).toEqual(movieCount)
})
