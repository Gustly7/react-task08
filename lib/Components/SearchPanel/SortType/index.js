'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filmApi = require('../../../api/film-api');

var filmApi = _interopRequireWildcard(_filmApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortType = function (_Component) {
  _inherits(SortType, _Component);

  function SortType() {
    _classCallCheck(this, SortType);

    return _possibleConstructorReturn(this, (SortType.__proto__ || Object.getPrototypeOf(SortType)).apply(this, arguments));
  }

  _createClass(SortType, [{
    key: 'changeSortType',
    value: function changeSortType(event) {
      filmApi.setSortType(event.target.attributes.value.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'SortType' },
        _react2.default.createElement(
          'span',
          { className: 'white-font' },
          'Sort by'
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn-group btn-group-toggle', 'data-toggle': 'buttons' },
          _react2.default.createElement(
            'label',
            { className: 'btn btn-secondary active', value: 'release', onClick: this.changeSortType },
            _react2.default.createElement('input', { name: 'sortType', id: 'sortType1', type: 'radio', value: 'release' }),
            'release date'
          ),
          _react2.default.createElement(
            'label',
            { className: 'btn btn-secondary', value: 'rating', onClick: this.changeSortType },
            _react2.default.createElement('input', { name: 'sortType', id: 'sortType2', type: 'radio', value: 'rating' }),
            'rating'
          )
        )
      );
    }
  }]);

  return SortType;
}(_react.Component);

exports.default = SortType;