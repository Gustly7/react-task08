import * as types from '../actions/action-types'

export function getFilmsSuccess (films) {
  return {
    type: types.GET_FILMS_SUCCESS,
    films
  }
}

export function getFilmSuccess (film) {
  return {
    type: types.GET_FILM_SUCCESS,
    film
  }
}

export function getSearchString (searchString) {
  return {
    type: types.SEARCH_STRING,
    searchString
  }
}

export function getSearchType (searchType) {
  return {
    type: types.SEARCH_TYPE,
    searchType
  }
}

export function getSort (sortType) {
  return {
    type: types.SORT,
    sortType
  }
}
