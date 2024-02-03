import styled from 'styled-components';
import { FaTrashCan } from 'react-icons/fa6';

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
      return '#f4f17f';
    case 'East Coast IPA':
      return '#f4f17f';
    case 'West Coast IPA':
      return '#f4f17f';
    case 'IPA':
      return '#f4f17f';
    case 'DIPA':
      return '#f4f17f';
    case 'TIPA':
      return '#f4f17f';
    case 'NE IPA':
      return '#f4f17f';
    case 'NE DIPA':
      return '#f4f17f';
    case 'NE TIPA':
      return '#f4f17f';
    case 'DDH IPA':
      return '#f4f17f';
    case 'DDH DIPA':
      return '#f4f17f';
    case 'DDH TIPA':
      return '#f4f17f';
    case 'Milkshake IPA':
      return '#f4f17f';
    case 'Porter':
      return '#29251e';
    case 'Baltic porter':
      return '#29251e';
    case 'English porter':
      return '#29251e';
    case 'American porter':
      return '#29251e';
    case 'Barley wine':
      return '#000000';
    case 'Mild':
      return '#000000';
    case 'Schwarzbier':
      return '#000000';
    case 'Amber ale':
      return '#e7b10b';
    case 'Flanders red ale':
      return '#7e3333';
    case 'Red ale':
      return '#7e3333';
    case 'Berliner weisse':
      return '#b92525';
    case 'Lambic':
      return '#b92525';
    case 'Witbier':
      return '#f7e9c1';
    case 'Weissbier':
      return '#f7e9c1';
    case 'Blonde ale':
      return '#f7e9c1';
    case 'Hefeweizen':
      return '#f7e9c1';
    case 'Bock':
      return '#7e5c3a';
    case 'Brown ale':
      return '#7e5c3a';
    case 'Doppelbock':
      return '#7e5c3a';
    case 'Dunkel':
      return '#7e5c3a';
    case 'Dunkelweizen':
      return '#7e5c3a';
    case 'Old ale':
      return '#7e5c3a';
    case 'Oud bruin':
      return '#7e5c3a';
    case 'Wee heavy':
      return '#7e5c3a';
    case 'Pale ale':
      return '#fcd970';
    case 'Bitter':
      return '#fcd970';
    case 'Eisbock':
      return '#fcd970';
    case 'British golden ale':
      return '#fcd970';
      case 'Golden ale':
      return '#fcd970';
    case 'Gose':
      return '#fcd970';
    case 'Helles bock':
      return '#fcd970';
    case 'American pale ale':
      return '#fcd970';
    case 'Belgian pale ale':
      return '#fcd970';
    case 'Saison':
      return '#fcd970';
    case 'Kellerbier':
      return '#fcd970';
    case 'California common':
      return '#fffb5b';
    case 'German helles':
      return '#fffb5b';
    case 'Munich helles':
      return '#fffb5b';
    case 'Gueuze':
      return '#fffb5b';
    case 'Kolsch':
      return '#fffb5b';
    case 'Marzen':
      return '#fffb5b';
    case 'Vienna lager':
      return '#fffb5b';
    case 'German pils':
      return '#fffb5b';
    case 'Czech pilsner':
      return '#fffb5b';
    case 'Lager':
      return '#fffb5b';
    case 'American lager':
      return '#fffb5b';
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
    case 'Porter':
      return '#ffe189';
    case 'Baltic porter':
      return '#ffe189';
    case 'English porter':
      return '#ffe189';
    case 'American Porter':
      return '#ffe189';
    case 'Barley wine':
      return '#ffe189';
    case 'Mild':
      return '#ffe189';
    case 'Schwarzbier':
      return '#ffe189';
    case 'Flanders red ale':
      return '#ffe189';
    case 'Red ale':
      return '#ffe189';
    case 'Berliner weisse':
      return '#ffe189';
    case 'Lambic':
      return '#ffe189';
    case 'Bock':
      return '#ffe189';
    case 'Brown ale':
      return '#ffe189';
    case 'Doppelbock':
      return '#ffe189';
    case 'Dunkel':
      return '#ffe189';
    case 'Dunkelweizen':
      return '#ffe189';
    case 'Old ale':
      return '#ffe189';
    case 'Oud bruin':
      return '#ffe189';
    case 'Wee heavy':
      return '#ffe189';
    default:
      return null;
  }
};

export const CardBox = styled.div`
  position: relative;
  border: 1px solid #b4783a;
  border-radius: 5px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  color: ${getColor};
  background-color: ${getBackgrounColor};
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 30px;
  height: 30px;
  align-self: center;
  padding: 10px;
  color: white;
  background-color: #b4783a;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

export const DeleteIcon = styled(FaTrashCan)`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
`;

export const CardText = styled.p`
  margin: 0;
`;
