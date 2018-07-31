import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';



class SearchPage extends Component {
  static propTypes = {
    searchedBooks: PropTypes.array.isRequired
  }

    render(){

      let {searchedTerm,
          inputText,
          selectOptions,
          searchedBooks,
          error} = this.props;

        return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'
              className="close-search"
              >
              Close
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value = {inputText}
                  onChange={(event)=> searchedTerm(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              {searchedBooks
              .map((searchedBook) => (
                <li key = {searchedBook.id}>
                  <Book
                    cover = {searchedBook.imageLinks}
                    title = {searchedBook.title}
                    authors = {searchedBook.authors}
                    book={searchedBook}
                    shelf = {searchedBook.shelf}
                    selectOptions = {selectOptions}
                  />
              </li>))}

              {error}

              </ol>
            </div>
        </div>
        );
    }
};

export default SearchPage;