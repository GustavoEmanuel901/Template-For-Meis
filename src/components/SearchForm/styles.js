import styled from 'styled-components'

export const Block = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  > div:nth-child(1){
    > input {
      width: 300px;
    }
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  padding: 5px;

  background: var(--secondary);
  transition: 400ms;

  &:hover {
    opacity: 0.7;
  }
`;