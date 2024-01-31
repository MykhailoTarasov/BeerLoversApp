import styled from 'styled-components';

const getBackgrounColor = props => {
  switch (props.beerstyle) {
    case 'Imperial stout':
      return '#000000';
    case 'Milk stout':
      return '#000000';
    case 'Stout':
      return '#000000';
    case 'Irish stout':
      return '#000000';
    case 'American IPA':
      return '#faf8ba';
    case 'East Coast IPA':
      return '#faf8ba';
    case 'West Coast IPA':
      return '#faf8ba';
    case 'IPA':
      return '#faf8ba';
    case 'DIPA':
      return '#faf8ba';
    case 'TIPA':
      return '#faf8ba';
    case 'NE IPA':
      return '#faf8ba';
    case 'NE DIPA':
      return '#faf8ba';
    case 'NE TIPA':
      return '#faf8ba';
    case 'DDH IPA':
      return '#faf8ba';
    case 'DDH DIPA':
      return '#faf8ba';
    case 'DDH TIPA':
      return '#faf8ba';
    default:
      return null;
  }
};

const getColor = props => {
  switch (props.beerstyle) {
    case 'Imperial stout':
      return '#ffe189';
    case 'Milk stout':
      return '#ffe189';
    case 'Stout':
      return '#ffe189';
    case 'Irish stout':
      return '#ffe189';
    default:
      return null;
  }
};

export const CardBox = styled.div`
  position: relative;
  border: 1px solid #b4783a;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  color: ${getColor};
  background-color: ${getBackgrounColor};
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 70px;
  align-self: center;
  padding: 5px;
  color: white;
  background-color: #b4783a;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

export const CardTitle = styled.h2`
  margin: 0;
`;

export const CardText = styled.p`
  margin: 0;
`;
