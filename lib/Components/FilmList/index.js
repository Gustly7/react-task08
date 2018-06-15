'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _filmApi = require('../../api/film-api');

var filmApi = _interopRequireWildcard(_filmApi);

var _Film = require('../Film/Film');

var _Film2 = _interopRequireDefault(_Film);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilmList = function (_Component) {
  _inherits(FilmList, _Component);

  function FilmList() {
    _classCallCheck(this, FilmList);

    return _possibleConstructorReturn(this, (FilmList.__proto__ || Object.getPrototypeOf(FilmList)).apply(this, arguments));
  }

  _createClass(FilmList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var params = new URLSearchParams(this.props.location.search);
      if (params.get('search') != null) {
        filmApi.searchFilms(params.get('search'), params.get('searchBy'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container filmList' },
        this.props.films.data.map(function (film) {
          return _react2.default.createElement(
            'div',
            { key: film.id, className: 'data-list-item' },
            _react2.default.createElement('div', { className: 'details' }),
            _react2.default.createElement(_Film2.default, { film: film })
          );
        })
      );
    }
  }]);

  return FilmList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    films: store.filmState.films
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilmList);