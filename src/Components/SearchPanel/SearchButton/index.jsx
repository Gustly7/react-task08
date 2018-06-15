import React, { Component } from 'react'
import * as filmApi from '../../../api/film-api'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Index extends Component {
  searchByClick () {
    filmApi.searchFilms(this.props.searchString, this.props.searchType)
  }

  render () {
    return (
      <div className='SearchButton'>
        <Link to={`/search?search=${this.props.searchString}&searchBy=${this.props.searchType}`}>
          <button id='SearchButton' className='submit btn btn-primary btn-lg' onClick={this.searchByClick.bind(this)}>SEARCH</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps (store) {
  return {
    searchString: store.filmState.searchString,
    searchType: store.filmState.searchType
  }
}

// export default Index
export default connect(mapStateToProps)(Index)
