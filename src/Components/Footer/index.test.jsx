import React, { Component } from 'react'
import Footer from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Footer component test suite', () => {
  test('Footer snapshot renders correctly', () => {
    const tree = renderer.create(
      <Footer />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Footer div should have "Footer" class', () => {
    const wrapper = shallow(
      <Footer />
    )
    const elem = wrapper.find('div.Footer')
    expect(elem.text()).toBe('netflixroulette')
  })
})
