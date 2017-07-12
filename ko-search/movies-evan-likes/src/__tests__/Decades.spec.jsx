import React from 'react'
import renderer from 'react-test-renderer'
import Decades from '../App/components/Filters/Decades'

test('Decades renders correctly', () => {
  const component = renderer.create(<Decades />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot
})
