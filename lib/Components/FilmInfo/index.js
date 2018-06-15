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

require('./FilmInfo.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      filmApi.getFilm(this.props.match.params.id);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(
        'div',
        { className: 'film-info' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { className: 'film-info-poster', src: this.props.film.poster_path }),
          _react2.default.createElement(
            'div',
            { className: 'film-info-description-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'film-info-name-and-rating-wrapper' },
              _react2.default.createElement(
                'span',
                { className: 'film-name card-title' },
                this.props.film.title
              ),
              this.props.film.vote_average > 0 && _react2.default.createElement(
                'span',
                { className: 'film-info-rating' },
                this.props.film.vote_average
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'film-info-genre' },
              this.props.film.genres && this.props.film.genres.join(', ')
            ),
            _react2.default.createElement(
              'div',
              { className: 'film-info-year-and-length-wrapper' },
              _react2.default.createElement(
                'span',
                { className: 'film-info-year' },
                this.props.film.release_date && new Date(this.props.film.release_date).getFullYear()
              ),
              this.props.film.runtime && _react2.default.createElement(
                'span',
                { className: 'film-info-length' },
                this.props.film.runtime,
                ' min'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'film-info-description' },
              this.props.film.overview
            )
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

function mapStateToProps(store) {
  return {
    film: store.filmState.film
  };
}

// export default Index
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Index);