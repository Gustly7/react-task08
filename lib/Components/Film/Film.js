'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./Poster/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./FilmName/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./FilmYear/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./FilmGenre/index');

var _index8 = _interopRequireDefault(_index7);

require('./Film.css');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function itemClickHandler() {
  window.scrollTo(0, 0);
}

//class Film extends Component {

var Film = function Film(props) {

  render();
  {
    if (window['sessionStorage'] === undefined) {
      window['sessionStorage'] = {};
    }

    if (window['sessionStorage']['searchText'] === undefined) {
      window['sessionStorage']['searchText'] = ' ';
    }

    if (window['sessionStorage']['searchText'] === '') {
      throw new Error('Пустой поиск!');
    }
    console.log(undefined.props.film);
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/film/' + undefined.props.film.id, onClick: function onClick() {
          return undefined.itemClickHandler();
        }, className: 'film-link' },
      _react2.default.createElement(
        'div',
        { className: 'Film' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index2.default, { link: undefined.props.film.poster_path })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index4.default, { filmName: undefined.props.film.title })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index6.default, { filmYear: undefined.props.film.release_date })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(_index8.default, { filmGenre: undefined.props.film.genres.join(', ') })
            )
          )
        )
      )
    );
  }
};

exports.default = Film;