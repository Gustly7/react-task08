import React from 'react'
import './SearchPanel.css'
import SearchType from './SearchType/index'
import SearchHeader from './SearchHeader/index'
import SearchButton from './SearchButton/index'
import SearchResults from './SearchResults/index'
import SortType from './SortType/index'
import BGImage from './../../Images/netflixBG.jpg'
import * as filmApi from '../../api/film-api'

var SearchPanelStyle = {
  backgroundImage: 'url(' + BGImage + ')'
}

class SearchPanel extends React.Component {
  searchChange (event) {
    // sessionStorage.searchText = event.target.value
    console.log('changed')
    filmApi.setSearchString(event.target.value)
  }

  render () {
    return (
      <div className='SearchPanel' style={SearchPanelStyle} >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <SearchHeader />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <span className='white-font'>FIND YOUR MOVIE</span>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <input className='form-control' id='inputSearch' type='text' onChange={this.searchChange} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <SearchType />
            </div>
            <div className='col'>
              <SearchButton />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <SearchResults />
            </div>
            <div className='col'>
              <SortType />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPanel
