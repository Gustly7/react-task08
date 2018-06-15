import React, { Component } from 'react'
import FilmName from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('FilmName component test suite', () => {
  test('FilmName snapshot renders correctly', () => {
    const tree = renderer.create(
      <FilmName />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('FilmName div should have "FilmName" class', () => {
    const wrapper = shallow(
      <FilmName />
    )
    const elem = wrapper.find('div.FilmName')
    expect(elem.length).toBe(1)
  })
})
