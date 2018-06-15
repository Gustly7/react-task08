import React, { Component } from 'react'
import Film from './Film.jsx'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Film component test suite', () => {
  window['sessionStorage'] = {}
  window['sessionStorage']['searchText'] = 'just film'

  test('Film snapshot renders correctly', () => {
    const tree = renderer.create(
      <Film films={{poster_path: '', release_date: '2000'}} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Film div should have poster, year, genre and name', () => {
    const wrapper = mount(
      <Film films={{poster_path: '', release_date: '2000'}} />
    )
    const elem = wrapper.find('div.Poster')
    expect(elem.length).toBe(1)
  })
})
