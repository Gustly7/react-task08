'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _filmReducer = require('./filmReducer');

var _filmReducer2 = _interopRequireDefault(_filmReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine Reducers
var reducers = (0, _redux.combineReducers)({
  filmState: _filmReducer2.default
});

// Reducers
exports.default = reducers;