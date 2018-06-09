import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Search from './components/Search';
import List from './components/List';

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
  render() {
    return (
      <Main>
        <Body>
          <Route exact path="/" component={List} />
        </Body>
      </Main>
    )
  }
}

export default BooksApp;
