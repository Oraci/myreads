import React, {Component} from 'react';
import styled from 'styled-components';
import Book from './Book';

const Bookshelf = styled.div`
  padding: 0 10px 20px;

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

const Title = styled.h2`
  border-bottom: 1px solid #dedede;
`;

const BookshelfBooks = styled.div`
  text-align: center;
`;

const BooksGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Li = styled.li`
  padding: 10px 15px;
  text-align: left;
`; 

class Shelf extends Component {
  render() {
    const {title, books, updateBookShelf} = this.props;
    
    return (
      <Bookshelf>
        <Title>{title}</Title>
        <BookshelfBooks>
          <BooksGrid>
          {
            books.map(book => (
              <Li key={book.id}>
                <Book
                  key={book.id}
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
              </Li>
            ))
          }
          </BooksGrid>
        </BookshelfBooks>
      </Bookshelf>
    )
  }
}

export default Shelf;