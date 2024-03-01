import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;

  width: 100%;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
@media (max-width: 375px) {
  width: 100%;
}
width: 350px;
max-height: 180px;

&:hover {
    transform: scale(1.03);
  }
`;
