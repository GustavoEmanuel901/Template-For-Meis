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
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: var(--font);
  margin-top: 10px;
`;

export const Block = styled.div`
  width: 350px;
  margin-top: 20px;

  > button {
    width: 100%;
    margin-top: 20px;
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
  align-items: center;
  justify-content: center;

  margin-top: 30px;
`;