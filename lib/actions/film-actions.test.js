'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

var _filmActions = require('./film-actions');

var actions = _interopRequireWildcard(_filmActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('actions', function () {
  test('should set results sort mode', function () {
    var sortType = 'rating';
    var expectedAction = {
      type: types.SORT,
      sortType: sortType
    };
    (0, _expect2.default)(actions.getSort('rating')).toEqual(expectedAction);
  });

  test('should set movies results', function () {
    var searchString = 'Kill bill';

    var expectedAction = {
      type: types.SEARCH_STRING,
      searchString: searchString
    };
    (0, _expect2.default)(actions.getSearchString(searchString)).toEqual(expectedAction);
  });
});