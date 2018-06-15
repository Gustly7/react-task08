import filmReducer from './filmReducer'
// import { GET_MOVIE_SUCCESS, SEARCH_MOVIES_SUCCESS, SET_RESULTS_SORT_MODE, SortMode, SearchMode } from '../actions'
import * as actions from './../actions/film-actions'
import * as types from './../actions/action-types'

describe('result reducer', () => {
  test('should handle GET_MOVIE_SUCCESS', () => {
    expect(
      filmReducer([], {
        type: types.GET_FILMS_SUCCESS,
        films: { id: 1 }
      })
    ).toEqual({
      films: { id: 1 }
    })

    expect(
      filmReducer(undefined, {
        type: 'DEFAULT'
      })
    ).toEqual({
      films: {data: []},
      searchString: '',
      searchType: 'title'
    })
  })
})

describe('filmReducer', () => {
  test('should handle SET_RESULTS_SORT_MODE', () => {
    var films = [{ id: 1, release_date: new Date('2000-02-03'), vote_average: 10 }, { id: 2, release_date: new Date('2001-02-03'), vote_average: 7 }]
    expect(
      filmReducer({ films: {data: films} }, {
        type: types.SORT,
        sortType: 'release'
      })
    ).toEqual({
      films: {data: [{ id: 1, release_date: new Date('2000-02-03'), vote_average: 10 }, { id: 2, release_date: new Date('2001-02-03'), vote_average: 7 }]}
    })

    expect(
      filmReducer({ films: {data: films} }, {
        type: types.SORT,
        sortType: 'rating'
      })
    ).toEqual({
      films: {data: [{ id: 2, release_date: new Date('2001-02-03'), vote_average: 7 }, { id: 1, release_date: new Date('2000-02-03'), vote_average: 10 }]}
    })
  })
})
