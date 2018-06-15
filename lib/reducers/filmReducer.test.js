'use strict';

var _filmReducer = require('./filmReducer');

var _filmReducer2 = _interopRequireDefault(_filmReducer);

var _filmActions = require('./../actions/film-actions');

var actions = _interopRequireWildcard(_filmActions);

var _actionTypes = require('./../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { GET_MOVIE_SUCCESS, SEARCH_MOVIES_SUCCESS, SET_RESULTS_SORT_MODE, SortMode, SearchMode } from '../actions'
describe('result reducer', function () {
  test('should handle GET_MOVIE_SUCCESS', function () {
    expect((0, _filmReducer2.default)([], {
      type: types.GET_FILMS_SUCCESS,
      films: { id: 1 }
    })).toEqual({
      films: { id: 1 }
    });

    expect((0, _filmReducer2.default)(undefined, {
      type: 'DEFAULT'
    })).toEqual({
      films: { data: [] },
      searchString: '',
      searchType: 'title'
    });
  });
});

describe('filmReducer', function () {
  test('should handle SET_RESULTS_SORT_MODE', function () {
    var films = [{ id: 1, release_date: new Date('2000-02-03'), vote_average: 10 }, { id: 2, release_date: new Date('2001-02-03'), vote_average: 7 }];
    expect((0, _filmReducer2.default)({ films: { data: films } }, {
      type: types.SORT,
      sortType: 'release'
    })).toEqual({
      films: { data: [{ id: 1, release_date: new Date('2000-02-03'), vote_average: 10 }, { id: 2, release_date: new Date('2001-02-03'), vote_average: 7 }] }
    });

    expect((0, _filmReducer2.default)({ films: { data: films } }, {
      type: types.SORT,
      sortType: 'rating'
    })).toEqual({
      films: { data: [{ id: 2, release_date: new Date('2001-02-03'), vote_average: 7 }, { id: 1, release_date: new Date('2000-02-03'), vote_average: 10 }] }
    });
  });
});