import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../icons/arrow-back.svg';
import {search} from '../api/BooksAPI';
import Book from './Book';

const SearchBooks = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchBooksBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
`;

const SearchLink = styled(Link)`
  display: block;
  top: 20px;
  left: 15px;
  width: 50px;
  height: 53px;
  background: white;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  font-size: 0;
`;

const SearchBooksInputWrapper = styled.div`
  flex: 1;
  background: #e9e;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  font-size: 1.25em;
  border: none;
  outline: none;
`;

const SearchBooksResults = styled.div`
  padding: 80px 10px 20px;
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

class Search extends Component {
  state = {
    query: '',
    searchBooks: []
  }

  onUpdateQuery = (query) => {
    if (query) {
      search(query).then((searchResults) => {
        if (searchResults && searchResults.length) {
          const searchBooks = searchResults.map(result => {
            result.shelf = this.addShelf(result);
            return result;
          });

          this.setState({searchBooks});
        } else {
          this.setState({searchBooks: []});
        }
      });
    } else {
      this.setState({searchBooks: []});
    }
  }

  addShelf(result) {
    const {books} = this.props;
    const hasShelf = books.filter(book => book.id === result.id);
    return hasShelf.length ? hasShelf[0].shelf : "none";
  }

  render() {
    const {updateBookShelf} = this.props;
    const {query, searchBooks} = this.state;

    return (
      <SearchBooks>
        <SearchBooksBar>
          <SearchLink to="/" />
          <SearchBooksInputWrapper>
            <Input
              type="text"
              placeholder="Search by title or author"
              onChange={(event)=> this.onUpdateQuery(event.target.value)}
            />
          </SearchBooksInputWrapper>
        </SearchBooksBar>
        <SearchBooksResults>
          <BooksGrid>
          {
            searchBooks.length > 0 && searchBooks.map(book => (
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
        </SearchBooksResults>
      </SearchBooks>
    )
  }
}

export default Search;