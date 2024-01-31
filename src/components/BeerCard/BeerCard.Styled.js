import styled from 'styled-components';

export const CardBox = styled.div`
  position: relative;
  border: 1px solid #b4783a;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  backgroun-color: 
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
