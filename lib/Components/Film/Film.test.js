'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Film = require('./Film.jsx');

var _Film2 = _interopRequireDefault(_Film);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Film component test suite', function () {
  window['sessionStorage'] = {};
  window['sessionStorage']['searchText'] = 'just film';

  test('Film snapshot renders correctly', function () {
    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Film2.default, { films: { poster_path: '', release_date: '2000' } })).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Film div should have poster, year, genre and name', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Film2.default, { films: { poster_path: '', release_date: '2000' } }));
    var elem = wrapper.find('div.Poster');
    expect(elem.length).toBe(1);
  });
});