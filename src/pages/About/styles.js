import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
`;

export const Content = styled.main`

  display: flex;
  flex-direction: column;
  padding: 20px 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--primary);

  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;

  padding: 0 55px;

  @media(max-width: 470px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: var(--font);
  text-align: center;
  margin-top: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: var(--font);
`;

export const Text = styled.p`
  color: var(--font);
  font-size: 16px;
`;

export const Footer =styled.footer`
  padding: 25px;
  width: 95%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

