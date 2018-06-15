import * as types from '../actions/action-types'

const initialState = {
  films: {data: []},
  film: {},
  searchString: '',
  searchType: 'title'
}

const filmReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.GET_FILMS_SUCCESS:
      return Object.assign({}, state, { films: action.films })
    case types.GET_FILM_SUCCESS:
      return Object.assign({}, state, { film: action.film })
    case types.SEARCH_STRING:
      return Object.assign({}, state, { searchString: action.searchString })
    case types.SEARCH_TYPE:
      return Object.assign({}, state, { searchType: action.searchType })
    case types.SORT:
      var filmsArr = state.films.data
      switch (action.sortType) {
        case 'release':
          filmsArr.sort(function (a, b) { return new Date(a.release_date) - new Date(b.release_date) })
          break
        case 'rating':
          filmsArr.sort(function (a, b) { return parseFloat(a.vote_average) - parseFloat(b.vote_average) })
          break
      }
      var ob = Object.assign({}, state, {films: {data: filmsArr}})
      return ob
  }
  return state
}

export default filmReducer
