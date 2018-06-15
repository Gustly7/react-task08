'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

var _FilmList = require('./Components/FilmList/');

var _FilmList2 = _interopRequireDefault(_FilmList);

var _FilmErrorBoundary = require('./Components/FilmErrorBoundary');

var _FilmErrorBoundary2 = _interopRequireDefault(_FilmErrorBoundary);

var _MainErrorBoundary = require('./Components/MainErrorBoundary');

var _MainErrorBoundary2 = _interopRequireDefault(_MainErrorBoundary);

require('./App.css');

var _SearchPanel = require('./Components/SearchPanel/SearchPanel');

var _SearchPanel2 = _interopRequireDefault(_SearchPanel);

var _index = require('./Components/Footer/index');

var _index2 = _interopRequireDefault(_index);

var _FilmInfo = require('./Components/FilmInfo');

var _FilmInfo2 = _interopRequireDefault(_FilmInfo);

var _reactRouterDom = require('react-router-dom');

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(
          _MainErrorBoundary2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'App' },
            _react2.default.createElement(_SearchPanel2.default, null),
            _react2.default.createElement(
              _FilmErrorBoundary2.default,
              null,
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _FilmList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/search/:query?', component: _FilmList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/film/:id', component: _FilmInfo2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
              )
            ),
            _react2.default.createElement(_index2.default, null)
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;