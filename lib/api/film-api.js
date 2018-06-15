'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilms = getFilms;
exports.searchFilms = searchFilms;
exports.getFilm = getFilm;
exports.setSearchString = setSearchString;
exports.setSearchType = setSearchType;
exports.setSortType = setSortType;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _filmActions = require('../actions/film-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFilms() {
  return _axios2.default.get('http://react-cdp-api.herokuapp.com/movies').then(function (response) {
    _store2.default.dispatch((0, _filmActions.getFilmsSuccess)(response.data));
  });
}

function searchFilms() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var searchType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'title';

  return _axios2.default.get('http://react-cdp-api.herokuapp.com/movies?search=' + query + '&searchBy=' + searchType).then(function (response) {
    _store2.default.dispatch((0, _filmActions.getFilmsSuccess)(response.data));
  });
}

function getFilm(pId) {
  // return axios.get('http://react-cdp-api.herokuapp.com/movies/${pId}')
  return _axios2.default.get('http://react-cdp-api.herokuapp.com/movies/' + pId).then(function (response) {
    _store2.default.dispatch((0, _filmActions.getFilmSuccess)(response.data));
  });
}

function setSearchString() {
  var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _store2.default.dispatch((0, _filmActions.getSearchString)(searchString));
}

function setSearchType() {
  var searchType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _store2.default.dispatch((0, _filmActions.getSearchType)(searchType));
}

function setSortType() {
  var setSortType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _store2.default.dispatch((0, _filmActions.getSort)(setSortType));
}