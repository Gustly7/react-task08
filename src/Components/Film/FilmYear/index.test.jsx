import React, { Component } from 'react'
import FilmYear from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('FilmYear component test suite', () => {
  test('FilmYear snapshot renders correctly', () => {
    const tree = renderer.create(
      <FilmYear filmYear={'2000'} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('FilmYear div should have "FilmYear" class', () => {
    const wrapper = shallow(
      <FilmYear filmYear={'2000'} />
    )
    const elem = wrapper.find('div.FilmYear')
    expect(elem.length).toBe(1)
  })
})
