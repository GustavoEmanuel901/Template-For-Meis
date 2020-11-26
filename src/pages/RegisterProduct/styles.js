import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 776px){
    grid-template-columns: 1fr;
  }
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  

  > * {
    margin-top: 30px;
  }
`;

export const UploadContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const Image = styled.img``;

export const Title = styled.h1`
  color: var(--font);
  font-size: 30px;
`;

export const Subtitle = styled.h2`
  color: var(--font);
  font-size: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 60px 40px;
`;

export const Block = styled.div`
  margin-top: 20px;

  > button {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: var(--font);
`;

