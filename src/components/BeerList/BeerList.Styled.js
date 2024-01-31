import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 100%;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
flex-basis: calc((100% - 2 * 24px) / 3);

`;
