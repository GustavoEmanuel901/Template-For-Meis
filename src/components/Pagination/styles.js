import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationButton = styled.div`
  display: flex;

  > .select {
    color: var(--secondary);
  }
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: var(--white);
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;