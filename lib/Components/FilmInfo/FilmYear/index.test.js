'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FilmYear component test suite', function () {
  test('FilmYear snapshot renders correctly', function () {
    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { filmYear: '2000' })).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('FilmYear div should have "FilmYear" class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { filmYear: '2000' }));
    var elem = wrapper.find('div.FilmYear');
    expect(elem.length).toBe(1);
  });
});