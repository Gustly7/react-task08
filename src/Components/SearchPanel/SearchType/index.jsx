import React, { Component } from 'react'
import * as filmApi from '../../../api/film-api'

class SearchType extends Component {
  changeSearchType (event) {
    filmApi.setSearchType(event.target.attributes.value.value)
  }

  render () {
    return (
      <div className='SearchType'>
        <span className='white-font'>Search by</span>
        <div className='btn-group btn-group-toggle' data-toggle='buttons' id='searchType'>
          <label className='btn btn-secondary active' value='title' onClick={this.changeSearchType}>
            <input type='radio' id='SearchType01' value='title' defaultChecked onClick={this.changeSearchType} onChange={this.changeSearchType} /> Title
          </label>
          <label className='btn btn-secondary' value='genres' onClick={this.changeSearchType}>
            <input type='radio' id='SearchType02' value='genres' onChange={this.changeSearchType} /> Genre
          </label>
        </div>
      </div>
    )
  }
}

export default SearchType
