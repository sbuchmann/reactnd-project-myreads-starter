import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Bookgrid from "./Bookgrid";

class SearchBook extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onSearchBooks: PropTypes.func.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.onSearchBooks('');
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className='close-search'
                        to='/'>
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
                            onChange={(event) => this.props.onSearchBooks(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <Bookgrid
                        books={this.props.books}
                        onChangeShelf={this.props.onChangeShelf}/>
                </div>
            </div>
        );
    }
}

export default SearchBook;
