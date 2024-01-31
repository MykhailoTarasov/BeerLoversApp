import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap: 10px;

  width: 100%;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
flex-basis: calc((100% - 2 * 24px) / 3);

&:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }

`;
