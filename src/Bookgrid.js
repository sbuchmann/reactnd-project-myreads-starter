import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Book from "./Book";

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    state = {

    };

    render() {
        const {books} = this.props;

        return (
            <ol className="books-grid">
                {books.map(book => {
                    return (<li key={book.id}>
                        <Book book={book} />
                    </li>);
                })}
            </ol>
        );
    }
}

export default Bookshelf;
