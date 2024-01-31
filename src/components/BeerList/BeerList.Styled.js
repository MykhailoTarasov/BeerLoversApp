import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;

margin: 0;
padding: 0;
list-style: none;
`

export const ListItem = styled.li`
flex-basis: calc((100% - 32px) / 3);
`