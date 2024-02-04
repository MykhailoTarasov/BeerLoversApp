import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
  }

  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const StyledField = styled.input`
  color: #b4783a;
  width: 200px;
  height: 40px;
  border: 1px solid #b4783a;
  border-radius: 4px;
  margin: 0;
  padding-left: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledSelect = styled.select`
  color: #b4783a;
  width: 200px;
  height: 40px;
  border: 1px solid #b4783a;
  border-radius: 4px;
  margin: 0;
  padding-left: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const Button = styled.button`
  width: 120px;
  align-self: center;
  padding: 10px;
  color: white;
  background-color: #b4783a;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
