import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

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

// flex-basis: calc((100% - 2 * 24px) / 3);

&:hover {
    transform: scale(1.03);
  }
`;
