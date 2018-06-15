'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poster component test suite', function () {
  test('Poster snapshot renders correctly', function () {
    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { films: { poster_path: '' } })).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Poster div should have img inside', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    var elem = wrapper.find('div.Poster img');
    expect(elem.length).toBe(1);
  });
});