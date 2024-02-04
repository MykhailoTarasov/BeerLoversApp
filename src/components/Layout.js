import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20;
  color: #010101;
`;

export const MainContainer = styled.div`
  display: flex;
  @media (max-width: 1439px) {
    flex-direction: column;
  }
  justify-content: center;
  
  
  width: 100%;
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1440px) {
    flex-basis: 250px;
    padding-left: 30px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;
