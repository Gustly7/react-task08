import axios from 'axios'
import store from '../store'
import {
  getSearchString,
  getFilmsSuccess,
  getSearchType,
  getSort,
  getFilmSuccess
} from '../actions/film-actions'

export function getFilms () {
  return axios.get('http://react-cdp-api.herokuapp.com/movies')
    .then(response => {
      store.dispatch(getFilmsSuccess(response.data))
    })
}

export function searchFilms (query = '', searchType = 'title') {
  return axios.get('http://react-cdp-api.herokuapp.com/movies?search=' + query + '&searchBy=' + searchType)
    .then(response => {
      store.dispatch(getFilmsSuccess(response.data))
    })
}

export function getFilm (pId) {
  // return axios.get('http://react-cdp-api.herokuapp.com/movies/${pId}')
  return axios.get('http://react-cdp-api.herokuapp.com/movies/' + pId)
    .then(response => {
      store.dispatch(getFilmSuccess(response.data))
    })
}

export function setSearchString (searchString = '') {
  store.dispatch(getSearchString(searchString))
}

export function setSearchType (searchType = '') {
  store.dispatch(getSearchType(searchType))
}

export function setSortType (setSortType = '') {
  store.dispatch(getSort(setSortType))
}
