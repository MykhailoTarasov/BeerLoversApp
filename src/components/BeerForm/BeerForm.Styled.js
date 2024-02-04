import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledMessage = styled(ErrorMessage)`
  color: #cc0000;
  font-size: 20px;
  margin-top: 10px;
  position: absolute;
  top: 30px;
`;

export const StyledField = styled(Field)`
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

export const StyledSelectField = styled(StyledField)`
  padding: 8px;
`;

export const Button = styled.button`
  width: 120px;
  align-self: center;
  padding: 10px;
  margin-top: 20px;
  color: white;
  background-color: #b4783a;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
