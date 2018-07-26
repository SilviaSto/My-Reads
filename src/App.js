import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import BookShelves from './BookShelves'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
<<<<<<< HEAD
    query: '',
    searchedBooks:[]
=======
    query:''
>>>>>>> 7ee5517558be8d1c00e130dab97d67d1292ea84c
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
<<<<<<< HEAD

handleQuery = (query)=> {
  //indicates that there is a text
  if(query){
    this.setState({
      query: query
    });
    console.log(query)
  }
}
=======
>>>>>>> 7ee5517558be8d1c00e130dab97d67d1292ea84c

searchBook = (query) => {
  BooksAPI.search(query)
  .then()
}

<<<<<<< HEAD
render() {
  let {books, query} = this.state;
  return (
    <div className="app">

      <Route exact path='/'
        render= {() => (
          <BookShelves
          books = {books}
          selectOptions = {this.updateOptions}
          />
        )}
      />

      <Route path = '/search'
        render = {() => (
          <SearchPage
          searchedText = {query}
          />
        )}
      />

    </div>
    )
  }
=======
  render() {
    let {books, query} = this.state;
    return (
      <div className="app">

        <Route exact path='/'
          render= {() => (
            <BookShelves
            books = {books}
            selectOptions = {this.updateOptions}
            />
          )}
        />

        <Route path = '/search'
          render = {() => (
            <SearchPage
            searchedText = {query}
            />
          )}
        />

      </div>
      )
    }
>>>>>>> 7ee5517558be8d1c00e130dab97d67d1292ea84c
}


export default BooksApp
