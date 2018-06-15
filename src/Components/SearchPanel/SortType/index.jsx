import React, { Component } from 'react'
import * as filmApi from '../../../api/film-api'

class SortType extends Component {
  changeSortType (event) {
    filmApi.setSortType(event.target.attributes.value.value)
  }

  render () {
    return (
      <div className='SortType'>
        <span className='white-font'>Sort by</span>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-secondary active' value='release' onClick={this.changeSortType}>
            <input name='sortType' id='sortType1' type='radio' value='release' />release date
          </label>
          <label className='btn btn-secondary' value='rating' onClick={this.changeSortType}>
            <input name='sortType' id='sortType2' type='radio' value='rating' />rating
          </label>
        </div>
      </div>
    )
  }
}

export default SortType
