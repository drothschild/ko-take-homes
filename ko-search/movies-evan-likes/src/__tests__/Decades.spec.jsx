import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedDecades } from '../App/components/Filters/Decades'
import movieData from '../movieData.json'

test('Decades renders correctly', () => {
  const component = shallow(<UnwrappedDecades movieData={movieData} />)
  expect(component).toMatchSnapshot()
})
