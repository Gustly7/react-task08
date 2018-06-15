import expect from 'expect'
import * as types from './action-types'
import * as actions from './film-actions'

describe('actions', () => {
  test('should set results sort mode', () => {
    const sortType = 'rating'
    const expectedAction = {
      type: types.SORT,
      sortType: sortType
    }
    expect(actions.getSort('rating')).toEqual(expectedAction)
  })

  test('should set movies results', () => {
    const searchString = 'Kill bill'

    const expectedAction = {
      type: types.SEARCH_STRING,
      searchString: searchString
    }
    expect(actions.getSearchString(searchString)).toEqual(expectedAction)
  })
})
