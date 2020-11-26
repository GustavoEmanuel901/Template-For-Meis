import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: var(--font);
  font-size: 30px;
`;

export const Block = styled.div`
  width: 350px;
  margin-top: 20px;

  > button {
    width: 100%;
  }

  @media (max-width: 370px) {
    width: 300px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: var(--font);
`;

export const Links = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 30px 0;

  > a {
    margin-bottom: 15px;
  }
`;