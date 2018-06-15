import React, { Component } from 'react'
import Poster from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Poster component test suite', () => {
  test('Poster snapshot renders correctly', () => {
    const tree = renderer.create(
      <Poster films={{poster_path: ''}} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Poster div should have img inside', () => {
    const wrapper = shallow(
      <Poster />
    )
    const elem = wrapper.find('div.Poster img')
    expect(elem.length).toBe(1)
  })
})
