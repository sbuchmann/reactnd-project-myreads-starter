import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';

import Books from './Books';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
            books
        }))
      });
  }

  render() {
    return (
      <div className="app">

          <Route exact path='/' render={() => (
              <Books books={this.state.books}/>
          )} />
          <Route path='/create' render={({history}) => (
              <SearchBook/>
          )} />
      </div>
    )
  }
}

export default BooksApp
