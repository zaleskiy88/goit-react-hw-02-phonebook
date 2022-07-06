import styled from '@emotion/styled';

export const ContactsListUl = styled.ul`
  width: 550px;
  display: flex;
  flex-direction: column;
`;

export const ContacItemtLi = styled.li`
  display: inline-flex;
  justify-content: space-between;

  :not(:first-child) {
    margin-top: 15px;
  }
`;
