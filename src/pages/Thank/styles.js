import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--font);

  @media(max-width: 500px) {
    > h1 {
      font-size: 22px;
      text-align: center;
    }

    > h2 {
      text-align: center;
      font-size: 14px;
    }

    > p {
      font-size: 14px;
      max-width: 300px;      
    }

    > a {
      margin-bottom: 20px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
`;

export const Text = styled.p`
  max-width: 450px;
  margin-top: 15px;
  text-align: center;
  line-height: 25px;
`;