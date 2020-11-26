import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: var(--font);

  @media(max-width: 400px) {
      text-align: center;
    }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    @media(max-width: 600px) {
      width: 80%;
    }
  }
`;

export const Button = styled.button`
  outline: 0;
  background: none;
  color: var(--secondary);
  border: 0;

  margin-top: 10px;

  &:hover {
    opacity: 0.7;
  }
`;