import styled from 'styled-components';

export const Container = styled.li`
  max-width: 300px;
  border: 10px solid var(--secondary);

  > img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: var(--secondary);
  text-align: center;
  margin-top: 10px;
`;

export const Block = styled.div`
  margin: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  color: var(--secondary);
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Text = styled.span`
  font-size: 14px;
  color: var(--secondary);
`;
