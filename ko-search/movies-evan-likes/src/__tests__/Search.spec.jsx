import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped as UnwrappedSearch } from '../App/components/Filters/Search'

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch />)
  expect(component).toMatchSnapshot()
})
