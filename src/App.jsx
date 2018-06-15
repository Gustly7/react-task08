// @flow
import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import FilmList from './Components/FilmList/'
import FilmErrorBoundary from './Components/FilmErrorBoundary'
import MainErrorBoundary from './Components/MainErrorBoundary'
import './App.css'
import SearchPanel from './Components/SearchPanel/SearchPanel'
import Footer from './Components/Footer/index'
import FilmInfo from './Components/FilmInfo'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'

class App extends Component<{}> {
  render () {
    return (
      <Provider store={store}>
        <MainErrorBoundary>
          <div className='App'>
            <SearchPanel />
            <FilmErrorBoundary>
              <Switch>
                <Route exact path='/' component={FilmList} />
                <Route path='/search/:query?' component={FilmList} />
                <Route path='/film/:id' component={FilmInfo} />
                <Route path='*' component={NotFound} />
              </Switch>
            </FilmErrorBoundary>
            <Footer />
          </div>
        </MainErrorBoundary>
      </Provider>
    )
  }
}

export default App
