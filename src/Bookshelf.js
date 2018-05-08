import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Bookgrid from "./Bookgrid";

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfName: PropTypes.string.isRequired
    };

    state = {

    };

    render() {
        const {books, shelfName} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <Bookgrid books={books}/>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
