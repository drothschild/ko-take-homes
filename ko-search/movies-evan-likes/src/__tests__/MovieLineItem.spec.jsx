import React from 'react'
import { Provider } from 'react-redux'
import { shallow, render } from 'enzyme'
import MovieLineItem, {
  Unwrapped as UnwrappedMovieLineItem
} from '../App/components/Results/MovieLineItem'
import { expandLine } from '../App/components/Redux/actionCreators'
import store from '../App/components/Redux/store'

const movie = {
  title: 'Arrival',
  year: '2016',
  evanSays:
    "Loved this movie! Cerebral, engaging science fiction at its best. Do yourself a favor and don't watch any trailers or read anything about it before seeing it. You won't be disappointed!"
}
const id = encodeURIComponent(movie.title.toLowerCase() + movie.year)

test('MovieLineItem renders correctly', () => {
  const component = shallow(<UnwrappedMovieLineItem movie={movie} id={id} />)
  expect(component).toMatchSnapshot()
})

test('MovieLineItem should not show "evanSays" initially', () => {
  const component = render(
    <Provider store={store}>
      <MovieLineItem movie={movie} id={id} />
    </Provider>
  )
  const evanCount = 0
  expect(component.find('div').length).toEqual(evanCount)
})

test('MovieLineItem should show "evanSays" after expansion', () => {
  store.dispatch(expandLine(id))
  const component = render(
    <Provider store={store}>
      <MovieLineItem movie={movie} id={id} />
    </Provider>
  )
  store.dispatch(expandLine(''))
  const evanCount = 1
  expect(component.find('div').length).toEqual(evanCount)
})
