import styled from 'styled-components';

const BooksGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    padding: 10px 15px;
    text-align: left;    
  }
`;

export default BooksGrid;