// @flow
import React, { Component } from 'react'
import Poster from './Poster/index'
import FilmName from './FilmName/index'
import FilmYear from './FilmYear/index'
import FilmGenre from './FilmGenre/index'
import './Film.css'
import { Link } from 'react-router-dom'

type film = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  genres: Array<string>;
}

type Props = {
  className?: string,
  disabled?: boolean,
  film: film
};

class Film extends Component<Props> {
//const Film = (props: film) => {

  itemClickHandler (){
    window.scrollTo(0, 0)
  }

  render ()
  {
    if (window['sessionStorage'] === undefined) { window['sessionStorage'] = {} }

    if (window['sessionStorage']['searchText'] === undefined) { window['sessionStorage']['searchText'] = ' ' }

    if (window['sessionStorage']['searchText'] === '') {
      throw new Error('Пустой поиск!')
    }
    console.log(this.props.film)
    return (
      <Link to={'/film/' + this.props.film.id} onClick={() => this.itemClickHandler()} className='film-link'>
        <div className='Film'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <Poster link={this.props.film.poster_path} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <FilmName filmName={this.props.film.title} />
              </div>
              <div className='col'>
                <FilmYear filmYear={this.props.film.release_date} />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <FilmGenre filmGenre={this.props.film.genres.join(', ')} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Film
