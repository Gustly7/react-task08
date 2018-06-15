import React, { Component } from 'react'

class FilmName extends Component {
  render () {
    return (
      <div className='FilmName'>
        {this.props.filmName}
      </div>
    )
  }
}

export default FilmName
