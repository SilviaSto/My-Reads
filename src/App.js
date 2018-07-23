import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BookShelves from './BookShelves'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render= {() => (
          <BookShelves 
          books = {this.state.books}/>
        )}
        />
        <Route path = '/search' component = {SearchPage}/>
      </div>
      )
    }
  }

export default BooksApp
