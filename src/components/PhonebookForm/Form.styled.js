import styled from '@emotion/styled';

export const Form = styled.form`
  width: 550px;
  display: flex;

  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 15px;
  flex-direction: column;
  align-items: start;

  border: solid 3px black;
`;

export const Input = styled.input`
  margin-top: 10px;
  border-color: rgb(210 210 210);

  :focus {
    outline: 1px solid rgb(101 129 238);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
