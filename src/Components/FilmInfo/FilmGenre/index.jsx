import React, { Component } from 'react'

class FilmGenre extends Component {
  render () {
    return (
      <div className='FilmGenre'>
        {this.props.filmGenre}
      </div>
    )
  }
}

export default FilmGenre
