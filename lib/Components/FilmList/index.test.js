'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fetchMock = require('fetch-mock');

var _fetchMock2 = _interopRequireDefault(_fetchMock);

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockStore = (0, _reduxMockStore2.default)();

var middlewares = [_reduxThunk2.default];
// const mockStore = configureMockStore(middlewares)

describe('FilmList component test suite', function () {
  var film = { id: 1, name: 'Kill bill', release_date: '01-02-2004', genres: ['Action', 'Adventure'], director: 'Quentin Tarantino', poster_path: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10 };
  var store = void 0;

  afterEach(function () {
    _fetchMock2.default.reset();
    _fetchMock2.default.restore();
  });

  beforeEach(function () {
    store = mockStore({ filmState: { films: { data: [film] } } });
  });

  test('FilmList snapshot renders correctly', function () {
    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_index2.default, { store: store })).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('FilmList div should have "container filmList" classes', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { store: store }));
    var elem = wrapper.find('div.filmList');
    var elem2 = wrapper.find('div');
    console.log(wrapper);
    console.log(elem);
    console.log(elem2);
    console.log(wrapper.html());
    console.log(wrapper.text());
    expect(wrapper.length).toBe(1);
  });
});