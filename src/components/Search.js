import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../icons/arrow-back.svg';
import {search} from '../api/BooksAPI';
import Book from './Book';
import BooksGrid from './BooksGrid';

const SearchBooks = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchBooksBar = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
`;

const SearchBooksTitle = styled.div`
  padding: 10px 0;
  background: #f2af1e;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 400;
  margin: 0;
  color: white;
`;

const SearchLink = styled(Link)`
  display: block;
  top: 20px;
  left: 15px;
  width: 50px;
  height: 53px;
  background: #f2af1e;
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

class Search extends Component {
  state = {
    query: '',
    searchBooks: []
  }

  componentDidMount(){
    this.input.focus();
  }

  onUpdateQuery = (query) => {
    if (query) {
      search(query).then((searchResults) => {
        if (searchResults && searchResults.length) {
          const searchBooks = searchResults.map(result => {
            result.shelf = this.setShelf(result);
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

  setShelf(result) {
    const {books} = this.props;
    const hasShelf = books.filter(book => book.id === result.id);
    return hasShelf.length ? hasShelf[0].shelf : "none";
  }

  render() {
    const {updateBookShelf} = this.props;
    const {searchBooks} = this.state;

    return (
      <SearchBooks>
        <SearchBooksTitle>
          <Title>My Search</Title>
        </SearchBooksTitle>
        <SearchBooksBar>
          <SearchLink to="/" />
          <SearchBooksInputWrapper>
            <Input
              innerRef={comp => this.input = comp}
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
        </SearchBooksResults>
      </SearchBooks>
    )
  }
}

export default Search;