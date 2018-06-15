import React, { Component } from 'react'

class Poster extends Component {
  render () {
    return (
      <div className='Poster'>
        <img src={this.props.link} alt={this.props.name} />
      </div>
    )
  }
}

export default Poster
