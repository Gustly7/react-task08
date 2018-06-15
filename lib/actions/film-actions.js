'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilmsSuccess = getFilmsSuccess;
exports.getFilmSuccess = getFilmSuccess;
exports.getSearchString = getSearchString;
exports.getSearchType = getSearchType;
exports.getSort = getSort;

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getFilmsSuccess(films) {
  return {
    type: types.GET_FILMS_SUCCESS,
    films: films
  };
}

function getFilmSuccess(film) {
  return {
    type: types.GET_FILM_SUCCESS,
    film: film
  };
}

function getSearchString(searchString) {
  return {
    type: types.SEARCH_STRING,
    searchString: searchString
  };
}

function getSearchType(searchType) {
  return {
    type: types.SEARCH_TYPE,
    searchType: searchType
  };
}

function getSort(sortType) {
  return {
    type: types.SORT,
    sortType: sortType
  };
}