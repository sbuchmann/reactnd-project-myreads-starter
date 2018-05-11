import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';

import Books from './Books';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
      BooksAPI.getAll()
          .then((books) => {
              this.setState(() => ({
                  books
              }))
          });
  };

  searchBooks = (query) => {
      BooksAPI.search(query).then((books) => {
          let booksObj = books;
          if (!books || books.error) {
              booksObj = [];
          }
          else {
              const updatedBooks = books.map((bookInSearch) => {
                  const ownBook = this.state.books.filter((book) => {
                      if (book.id === bookInSearch.id) {
                          return book;
                      }
                      return false;
                  });
                  return (ownBook.length > 0 ? ownBook[0] : bookInSearch);
              });
              booksObj = updatedBooks;
          }

          this.setState(() => ({
              searchedBooks: booksObj
          }))
      });
  };

  changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.getAllBooks();
      });
  };

  render() {
    return (
      <div className="app">

          <Route exact path='/' render={() => (
              <Books
                  books={this.state.books}
                  onChangeShelf={this.changeShelf}/>
          )} />
          <Route path='/create' render={() => (
              <SearchBook
                  books={this.state.searchedBooks}
                  onSearchBooks={this.searchBooks}
                  onChangeShelf={this.changeShelf}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
