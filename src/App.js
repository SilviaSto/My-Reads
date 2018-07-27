import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import BookShelves from './BookShelves';
import {Route} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';

class BooksApp extends React.Component {

  state = {
    books: [],
    query: '',
    searchedBooks:[]
  };

updateData(){
  BooksAPI.getAll().then((books) => {
    this.setState({books});
  });
};

componentDidMount(){
    this.updateData();
};

updateOptions = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(
    this.updateData()
    );
};

searchedTerm = (query) => {
//update the input text
    this.setState({
      query: query
    });
//if there is a text search() is invoked
  if(query.length>0){
  const match = new RegExp(escapeRegExp(query), 'i');
    BooksAPI.search(query).then((searchedBooks) =>{
      this.setState({
        searchedBooks: searchedBooks.filter((searchedBook)=>match.test(searchedBook.title))
      })
    });
  }else{
    //if the text is deleted too fast the search result by first letter remains
    setTimeout(()=>{
      this.setState({
        searchedBooks: []
      })
      }, 1000);
  }
};


render() {
  let {books, query, searchedBooks} = this.state;

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
          inputText = {query}
          searchedBooks = {searchedBooks}
          searchedTerm = {this.searchedTerm}
          selectOptions = {this.updateOptions}
          />
        )}
      />

    </div>
    );
  };
};


export default BooksApp;
