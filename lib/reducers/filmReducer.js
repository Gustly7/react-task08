'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  films: { data: [] },
  film: {},
  searchString: '',
  searchType: 'title'
};

var filmReducer = function filmReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.GET_FILMS_SUCCESS:
      return Object.assign({}, state, { films: action.films });
    case types.GET_FILM_SUCCESS:
      return Object.assign({}, state, { film: action.film });
    case types.SEARCH_STRING:
      return Object.assign({}, state, { searchString: action.searchString });
    case types.SEARCH_TYPE:
      return Object.assign({}, state, { searchType: action.searchType });
    case types.SORT:
      var filmsArr = state.films.data;
      switch (action.sortType) {
        case 'release':
          filmsArr.sort(function (a, b) {
            return new Date(a.release_date) - new Date(b.release_date);
          });
          break;
        case 'rating':
          filmsArr.sort(function (a, b) {
            return parseFloat(a.vote_average) - parseFloat(b.vote_average);
          });
          break;
      }
      var ob = Object.assign({}, state, { films: { data: filmsArr } });
      return ob;
  }
  return state;
};

exports.default = filmReducer;