import React, { Component } from 'react'
import FilmGenre from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('FilmGenre component test suite', () => {
  test('FilmGenre snapshot renders correctly', () => {
    const tree = renderer.create(
      <FilmGenre />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('FilmGenre div should have "FilmGenre" class', () => {
    const wrapper = shallow(
      <FilmGenre />
    )
    const elem = wrapper.find('div.FilmGenre')
    expect(elem.length).toBe(1)
  })
})
