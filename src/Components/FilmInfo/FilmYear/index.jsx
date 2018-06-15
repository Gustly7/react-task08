import React, { Component } from 'react'

class FilmYear extends Component {
  render () {
    return (
      <div className='FilmYear'>
        {this.props.filmYear.substr(0, 4)}
      </div>
    )
  }
}

export default FilmYear
