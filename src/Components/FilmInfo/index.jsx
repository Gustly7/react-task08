import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as filmApi from '../../api/film-api'
import './FilmInfo.css'

class Index extends Component {
  componentDidMount () {
    filmApi.getFilm(this.props.match.params.id)
  }

  render () {
    console.log(this.props)
    return (
      <div className='film-info'>
        <div>
          <img className='film-info-poster' src={this.props.film.poster_path} />
          <div className='film-info-description-wrapper'>
            <div className='film-info-name-and-rating-wrapper'>
              <span className='film-name card-title'>{this.props.film.title}</span>
              { this.props.film.vote_average > 0 && <span className='film-info-rating'>{this.props.film.vote_average}</span> }
            </div>
            <div className='film-info-genre'>{this.props.film.genres && this.props.film.genres.join(', ')}</div>
            <div className='film-info-year-and-length-wrapper'>
              <span className='film-info-year'>{this.props.film.release_date && new Date(this.props.film.release_date).getFullYear()}</span>
              { this.props.film.runtime && <span className='film-info-length'>{this.props.film.runtime} min</span> }
            </div>
            <div className='film-info-description'>{this.props.film.overview}</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (store) {
  return {
    film: store.filmState.film
  }
}

// export default Index
export default connect(mapStateToProps)(Index)
