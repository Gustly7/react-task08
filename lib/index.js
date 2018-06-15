'use strict';

require('./index.css');

require('bootstrap/dist/css/bootstrap.min.css');

require('bootstrap/dist/js/bootstrap.bundle.min.js');

require('jquery/dist/jquery.min.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _ErrorBoundary = require('./ErrorBoundary');

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _ErrorBoundary2.default,
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store.store },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(_App2.default, null)
    )
  )
), document.getElementById('root'));