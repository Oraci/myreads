import React, {Component} from 'react';
import styled from 'styled-components';
import Book from './Book';
import BooksGrid from './BooksGrid';

const Bookshelf = styled.div`
  padding: 0 10px 20px;

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

const Title = styled.h2`
  border-bottom: 3px solid #f2af1e;
`;

const BookshelfBooks = styled.div`
  text-align: center;
`;

class Shelf extends Component {
  render() {
    const {title, books, updateBookShelf} = this.props;
    
    return (
      <Bookshelf>
        <Title>{title} {books.length > 0 && '(' + books.length + ')'}</Title>
        <BookshelfBooks>
          <BooksGrid>
          {
            books.map(book => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
              </li>
            ))
          }
          </BooksGrid>
        </BookshelfBooks>
      </Bookshelf>
    )
  }
}

export default Shelf;