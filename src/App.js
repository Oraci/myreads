import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Search from './components/Search';
import List from './components/List';
import * as BooksAPI from './api/BooksAPI';

const Main = styled.div`
  width: 100%;
  height: 100%;
  line-height: 1.5;
  background: white;
  display: flex;
`;

const Body = styled.div`
  flex: 1;
`;

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  }

  onUpdateBook = (book, shelf) => {
    book.shelf = shelf
    this.setState(prevState => ({
      books: prevState.books.filter((b) => b.id !== book.id).concat([book])
    }));

    BooksAPI.update(book, shelf);
  }

  render() {
    const {books} = this.state;

    return (
      <Main>
        <Body>
          <Route exact path="/" render={() => (
            <List
              books={books}
              updateBookShelf={this.onUpdateBook}
            />
          )} />
          <Route path="/search" render={() => (
            <Search
              books={books}
              updateBookShelf={this.onUpdateBook}
            />
          )} />
        </Body>
      </Main>
    )
  }
}

export default BooksApp;
