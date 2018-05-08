import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Bookshelf from "./Bookshelf";

class Books extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    state = {

    };

    render() {
        const {books} = this.props;

        const booksCurrentyReading = books.filter(book => book.shelf === 'currentlyReading');
        const booksWantToRead = books.filter(book => book.shelf === 'wantToRead');
        const booksRead = books.filter(book => book.shelf === 'read');

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books={booksCurrentyReading} shelfName="Currently Reading"/>
                        <Bookshelf books={booksWantToRead} shelfName="Want to Read"/>
                        <Bookshelf books={booksRead} shelfName="Read"/>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to='/create'>
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default Books;
