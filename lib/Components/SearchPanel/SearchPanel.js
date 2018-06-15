'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./SearchPanel.css');

var _index = require('./SearchType/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./SearchHeader/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./SearchButton/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./SearchResults/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./SortType/index');

var _index10 = _interopRequireDefault(_index9);

var _netflixBG = require('./../../Images/netflixBG.jpg');

var _netflixBG2 = _interopRequireDefault(_netflixBG);

var _filmApi = require('../../api/film-api');

var filmApi = _interopRequireWildcard(_filmApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPanelStyle = {
  backgroundImage: 'url(' + _netflixBG2.default + ')'
};

var SearchPanel = function (_React$Component) {
  _inherits(SearchPanel, _React$Component);

  function SearchPanel() {
    _classCallCheck(this, SearchPanel);

    return _possibleConstructorReturn(this, (SearchPanel.__proto__ || Object.getPrototypeOf(SearchPanel)).apply(this, arguments));
  }

  _createClass(SearchPanel, [{
    key: 'searchChange',
    value: function searchChange(event) {
      // sessionStorage.searchText = event.target.value
      console.log('changed');
      filmApi.setSearchString(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'SearchPanel', style: SearchPanelStyle },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index4.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'span',
                { className: 'white-font' },
                'FIND YOUR MOVIE'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement('input', { className: 'form-control', id: 'inputSearch', type: 'text', onChange: this.searchChange })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index6.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index8.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index10.default, null)
            )
          )
        )
      );
    }
  }]);

  return SearchPanel;
}(_react2.default.Component);

exports.default = SearchPanel;