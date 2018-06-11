import React, {Component} from 'react';
import img from '../icons/arrow-drop-down.svg';
import styled from 'styled-components';

const BookChangerContent = styled.div`
  position: absolute;
  right: 0;
  bottom: -8px;
  width: 40px;
  height: 40px;
  border-radius: 100% / 50%;
  background: #f2af1e;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const BookChangerSelect = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  option:checked, option:hover {
    color: #f2af1e;
  }
`;

class BookChanger extends Component {
  state = {
    values: [
      { display: 'Currently Reading', key: 'currentlyReading'},
      { display: 'Want to Read', key: 'wantToRead' },
      { display: 'Read', key: 'read' },      
      { display: 'none', key: 'none' }
    ]
  };

  handleChange(e) {
    this.setState({shelf: e.target.value});

    const {onChangeBook} = this.props;

    onChangeBook(e.target.value);
  }
    
  render() {
    const {shelf} = this.props;
    const {values} = this.state;

    return (
      <BookChangerContent>
        <BookChangerSelect onChange={(e) => this.handleChange(e)} value={shelf}>
          <option value="move" disabled>Move to...</option>
          {
            values.map(v => (
              <option key={v.key} value={v.key}>{v.display}</option>
            ))
          }
        </BookChangerSelect>      
      </BookChangerContent>
    )
  }
}

export default BookChanger;