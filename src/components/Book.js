import React, {Component} from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
  width: 140px;
`;

const BookContainerTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const BookTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;

const BookAuthors = styled.div`
  color: #999;
  font-size: 0.8em;
`;

const BookCover = styled.div`
  width: 128px;
  height: 193px;
`;

const BookCoverImg = styled.img`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background: #eee;
  width: 100%;
  height: 100%;
`;

class Book extends Component {
  render() {
    const {book} = this.props;
    const {title, authors = [], imageLinks : {thumbnail} = {}} = book; 

    return (
      <BookContainer>
        <BookContainerTop>
          <BookCover>
            <BookCoverImg src={thumbnail} />
          </BookCover>
        </BookContainerTop>
        <BookTitle>{title}</BookTitle>
        {
          authors.map((author, index) => (
            <BookAuthors key={index}>{author}</BookAuthors>            
          ))
        }
      </BookContainer>
    )
  }
}

export default Book;