import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BGImage from './Images/404.png'

var SearchPanelStyle = {
  'backgroundImage': 'url(' + BGImage + ')',
  'height': '500px',
  'background-size': '900px',
  'background-repeat': 'no-repeat',
  'background-position': 'center'
}

export default class NotFound extends Component {
  render () {
    return (
      <Link to='/'>
        <div style={SearchPanelStyle} />
      </Link>
    )
  }
}
