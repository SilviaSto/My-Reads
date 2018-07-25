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

updateData(){
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}

componentDidMount(){
    this.updateData();
  }

updateOptions = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(
    this.updateData()
    )

}

  render() {

    return (
      <div className="app">
        <Route exact path='/' render= {() => (
          <BookShelves
          books = {this.state.books}
          updateOptions = {this.updateOptions}
          />
        )}
        />
        <Route path = '/search' component = {SearchPage}/>
      </div>
      )
    }
}

export default BooksApp
