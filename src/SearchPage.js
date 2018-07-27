import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';



class SearchPage extends Component {
    render(){
      let {searchedTerm,
        inputText,
        selectOptions,
        searchedBooks} = this.props;

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
              {searchedBooks.map((book) => (
                <li key = {book.id}>
                  <Book
                    cover = {book.imageLinks}
                    title = {book.title}
                    authors = {book.authors}
                    shelf = {book.shelf}
                    book={book}
                    selectOptions = {selectOptions}
                    searchedBooks={searchedBooks}
                  />
                </li>))
              }
              </ol>
            </div>
        </div>
        );
    }
};

export default SearchPage;