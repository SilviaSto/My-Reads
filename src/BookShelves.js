import React, {Component} from 'react';
import Book from './Book';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  
    render (){
        return(
        <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book) => (
                      <li key = {book.id}>
                        <Book title = {book.title} 
                        authors= {book.authors} 
                        thumbnail = {book.imageLinks.thumbnail}/>
                      </li>))
                      }
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li key = {book.id}>
                        <Book title = {book.title} authors= {book.authors} thumbnail = {book.imageLinks.thumbnail} />
                      </li>))
                      }
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book) => (
                        <li key = {book.id}>
                          <Book title = {book.title} authors= {book.authors} thumbnail = {book.imageLinks.thumbnail} />
                        </li>))
                        }
                    </ol>
                  </div>
                </div>

              </div>
            </div>

            <div className="open-search">
              <Link to='search' onClick={() => this.setState({ showSearchPage: true })}></Link>
            </div>

        </div>
        );
    }
}




export default BookShelves;
