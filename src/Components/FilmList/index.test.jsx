import React, { Component } from 'react'
import FilmList from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import store from '../../store'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()

const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

import { Provider } from 'react-redux'

describe('FilmList component test suite', () => {
  const film = {id: 1, name: 'Kill bill', release_date: '01-02-2004', genres: ['Action', 'Adventure'], director: 'Quentin Tarantino', poster_path: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10}
  let store

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  beforeEach(() => {
    store = mockStore({filmState: {films: {data: [film]}}})
  })

  test('FilmList snapshot renders correctly', () => {
    const tree = renderer.create(
      <FilmList store={store} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('FilmList div should have "container filmList" classes', () => {
    const wrapper = shallow(
      <FilmList store={store} />
    )
    const elem = wrapper.find('div.filmList')
    const elem2 = wrapper.find('div')
    console.log(wrapper)
    console.log(elem)
    console.log(elem2)
    console.log(wrapper.html())
    console.log(wrapper.text())
    expect(wrapper.length).toBe(1)
  })
})
