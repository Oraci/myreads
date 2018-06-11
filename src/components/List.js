import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Shelf from './Shelf';
import img from '../icons/add.svg';

const ListBooks = styled.div`
  height: 100%;
  width: 100%;
`;

const ListBooksTitle = styled.div`
  padding: 10px 0;
  background: #f2af1e;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 400;
  margin: 0;
  color: white;
`;

const ListBooksContent = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;

const OpenSearchContent = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

const OpenSearchLink = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 100% / 50%;
  background: #f2af1e;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  font-size: 0;
`;

class List extends Component {
  render() {
    const {books, updateBookShelf} = this.props;

    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    const shelves = [
      {title: "Currently Reading", books: currentlyReading},
      {title: "Want to Read", books: wantToRead},
      {title: "Read", books: read}
    ];

    return (
      <ListBooks>
        <ListBooksTitle>
          <Title>My Reads</Title>
        </ListBooksTitle>
        <ListBooksContent>
        {
          shelves.map(({title, books}, index) => (
            <Shelf
              key={index}
              title={title}
              books={books}
              updateBookShelf={updateBookShelf}
            />
          ))
        }
        </ListBooksContent>
        <OpenSearchContent>
          <OpenSearchLink to="/search" />
        </OpenSearchContent>
      </ListBooks>
    )
  }
}

export default List;